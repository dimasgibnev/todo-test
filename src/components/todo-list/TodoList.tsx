import { STATUS } from '../../constants/status';
import { useFilter } from '../../store/useFilterStore';
import { ITask, useTodoStore } from '../../store/useTodoStore';
import { MyButton } from '../ui/MyButton';

export const TodoList = () => {
	const filter = useFilter(state => state.filter);
	const { removeTask, updateTask, getTasks } = useTodoStore();

	const tasks = getTasks(filter);

	const handleUpdate = (task: ITask) => {
		updateTask(task.id, {
			...task.attributes,
			status:
				task.attributes.status === STATUS.COMPLETED
					? STATUS.UNCOMPLETED
					: STATUS.COMPLETED
		});
	};

	return (
		<div>
			{tasks?.length
				? tasks.map(task => (
						<div key={task.id}>
							<h2>{task.attributes.name}</h2>
							<p>{task.attributes.description}</p>
							<MyButton onClick={() => removeTask(task.id)}>Удалить</MyButton>
							<input
								type='checkbox'
								name='status'
								checked={task.attributes.status === STATUS.COMPLETED}
								onChange={() => {
									handleUpdate(task);
								}}
							/>
						</div>
				  ))
				: 'Задач нет'}
		</div>
	);
};
