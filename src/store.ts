import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useTasks = create(
	devtools(set => ({
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
		addTask: async (data) => {
			try {
				const res = await fetch('https://cms.laurence.host/api/tasks', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				});
			} catch (error) {
				set({ error });
			}
		},
		removeTask: async (id) => {
			try {
				const res = await fetch(`https://cms.laurence.host/api/tasks/${id}`, {
					method: 'DELETE'
				});
			} catch (error) {
				set({ error });
			}
		},
		updateTask: async (id, data) => {
			try {
				const res = await fetch(`https://cms.laurence.host/api/tasks/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				});
			} catch (error) {
				set({ error });
			}
		}
	}))
);

export const useFilter = create(
	devtools(set => ({
		filter: 'all',
		setFilter: (filter: string) => set({ filter })
	}))
);
