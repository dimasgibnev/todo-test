import React from 'react';
import { FilterButton } from './FilterButton';
import styled from 'styled-components';
import { STATUS } from '../../constants/status';

export const Filter: React.FC = () => {
	return (
		<FilterWrapper>
			<FilterButton filterName={STATUS.ALL}>Все</FilterButton>
			<FilterButton filterName={STATUS.COMPLETED}>Завершенные</FilterButton>
			<FilterButton filterName={STATUS.UNCOMPLETED}>Незавершенные</FilterButton>
			<FilterButton filterName={STATUS.FAVORITE}>Избранные</FilterButton>
		</FilterWrapper>
	);
};

const FilterWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`;
