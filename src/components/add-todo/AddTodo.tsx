import React, { useState } from 'react';
import { useTasks } from '../../store';

export const AddTodo = () => {
	const addTask = useTasks(state => state.addTask);
	const [task, setTask] = useState({
		name: '',
		description: '',
		status: 'uncompleted'
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTask({ data: task });
		setTask({
			name: '',
			description: '',
			status: 'uncompleted'
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={task.name}
					onChange={e => setTask(prev => ({ ...prev, name: e.target.value }))}
				/>
				<input
					type='text'
					value={task.description}
					onChange={e =>
						setTask(prev => ({ ...prev, description: e.target.value }))
					}
				/>

				<button type='submit'>Добавить</button>
			</form>
		</>
	);
};
