import { useEffect } from 'react';
import { useTasks } from './store';
import './App.css';
import { TodoList } from './components/todo-list/TodoList';
import { Filter } from './components/filter/Filter';
import { AddTodo } from './components/add-todo/AddTodo';

function App() {
	const { fetchTasks } = useTasks();

	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	return (
		<div>
			<Filter />
			<TodoList />
			<AddTodo />
		</div>
	);
}

export default App;
