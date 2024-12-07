import React, { useState } from 'react';
import { useTodoStore } from '../../store/useTodoStore';
import { MyButton } from '../ui/MyButton';

export const CreateTask = () => {
	const createTask = useTodoStore(state => state.createTask);
	const [task, setTask] = useState({
		name: '',
		description: '',
		status: 'uncompleted'
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createTask(task);
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

				<MyButton type='submit'>Добавить</MyButton>
			</form>
		</>
	);
};
