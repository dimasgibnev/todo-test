import React, { ReactNode } from 'react';
import { useFilter } from '../../store/useFilterStore';
import { MyButton } from '../ui/MyButton';

type TButton = {
	filterName: string;
	children: ReactNode;
};

export const FilterButton: React.FC<TButton> = ({ filterName, children }) => {
	const { filter, setFilter } = useFilter(state => state);

	return (
		<MyButton
			disabled={filter === filterName}
			onClick={() => setFilter(filterName)}
		>
			{children}
		</MyButton>
	);
};
