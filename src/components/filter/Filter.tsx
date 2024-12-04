import { useFilter } from '../../store';

export const Filter = () => {
	const { filter, setFilter } = useFilter(state => state);
	return (
		<div>
			<button disabled={filter === 'all'} onClick={() => setFilter('all')}>
				Все
			</button>
			<button
				disabled={filter === 'completed'}
				onClick={() => setFilter('completed')}
			>
				Завершенные
			</button>
			<button
				disabled={filter === 'uncompleted'}
				onClick={() => setFilter('uncompleted')}
			>
				Незавершенные
			</button>
			<button
				disabled={filter === 'favorite'}
				onClick={() => setFilter('favorite')}
			>
				Избранные
			</button>
		</div>
	);
};
