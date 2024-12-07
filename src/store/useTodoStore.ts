import { create } from 'zustand';
import { STATUS } from '../constants/status';

export interface ITask {
	id: string;
	attributes: {
		name: string;
		description: string;
		status: string;
		createdAt: string;
	};
}

interface ITodoStore {
	tasks: ITask[];
	error: string | null;
	isLoading: boolean;
	fetchTasks: () => void;
	getTasks: (filter: string) => ITask[]
	createTask: (taskData: {
		name: string;
		description: string;
		status: string;
	}) => void;
	removeTask: (id: string) => void;
	updateTask: (
		id: string,
		taskData: {
			name: string;
			description: string;
			status: string;
		}
	) => void;
}

export const useTodoStore = create<ITodoStore>((set, get) => ({
	tasks: [],
	error: null,
	isLoading: false,
	fetchTasks: async () => {
		try {
			const res = await fetch('https://cms.laurence.host/api/tasks');

			const tasks = await res.json();
			set({ tasks: tasks.data });
		} catch (error) {
			set({ error });
		}
	},
	getTasks: filter => {
		const { tasks } = get();
		switch (filter) {
			case STATUS.COMPLETED:
				return tasks.filter(task => task.attributes.status === STATUS.COMPLETED);
			case STATUS.UNCOMPLETED:
				return tasks.filter(task => task.attributes.status !== STATUS.COMPLETED);

			case STATUS.FAVORITE:
				return JSON.parse(localStorage.getItem(STATUS.FAVORITE))

			default:
				return tasks;
		}
	},
	createTask: async taskData => {
		try {
			const res = await fetch('https://cms.laurence.host/api/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ data: taskData })
			});

			const { data } = await res.json();
			const { tasks } = get();
			set({ tasks: [data, ...tasks] });
		} catch (error) {
			set({ error });
		}
	},
	removeTask: async id => {
		try {
			await fetch(`https://cms.laurence.host/api/tasks/${id}`, {
				method: 'DELETE'
			});

			const { tasks } = get();
			set({ tasks: tasks.filter(task => task.id !== id) });
		} catch (error) {
			set({ error });
		}
	},
	updateTask: async (id, taskData) => {
		try {
			const res = await fetch(`https://cms.laurence.host/api/tasks/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ data: taskData })
			});

			const updatedTask = await res.json();
			const { tasks } = get();

			set({
				tasks: tasks.map(task => (task.id === id ? updatedTask.data : task))
			});
		} catch (error) {
			set({ error });
		}
	}
}));
