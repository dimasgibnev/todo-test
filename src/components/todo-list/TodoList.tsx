import { useFilter, useTasks } from '../../store';

export const TodoList = () => {
	const filter = useFilter(state => state.filter);
	const { removeTask, updateTask } = useTasks();
	const tasks = useTasks(state => {
		switch (filter) {
			case 'completed':
				return state.tasks.filter(
					task => task.attributes.status === 'completed'
				);
			case 'uncompleted':
				return state.tasks.filter(
					task => task.attributes.status === 'uncompleted'
				);
			default:
				return state.tasks;
		}
	});

	return (
		<div>
			{tasks.length &&
				tasks.map(task => (
					<div key={task.id}>
						<h2>{task.attributes.name}</h2>
						<p>{task.attributes.description}</p>
						<button onClick={() => removeTask(task.id)}>Удалить</button>
						<input
							type='checkbox'
							name='status'
							checked={task.attributes.status === 'completed'}
							onChange={() => {
								updateTask(task.id, {
									data: {
										...task.attributes,
										status:
											task.attributes.status === 'completed'
												? 'uncompleted'
												: 'completed'
									}
								});
							}}
						/>
					</div>
				))}
		</div>
	);
};
