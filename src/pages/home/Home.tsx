import React, { useEffect } from 'react';
import { useTodoStore } from '../../store/useTodoStore';
import { Filter } from '../../components/filter/Filter';
import { TodoList } from '../../components/todo-list/TodoList';
import { CreateTask } from '../../components/create-task/CreateTask';
import './home.scss';
import styled from 'styled-components';

export const Home: React.FC = () => {
	const { fetchTasks } = useTodoStore();

	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	return (
		<AppWrapper>
			<Filter />
			<TodoList />
			<CreateTask />
		</AppWrapper>
	);
};


const AppWrapper = styled.div`
min-height:400px;
background-color: white;
padding: 1rem;
border-radius: 1rem;
`