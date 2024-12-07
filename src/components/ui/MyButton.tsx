import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const MyButton: React.FC<PropsWithChildren> = ({
	children,
	...props
}) => {
	return <Button {...props}>{children}</Button>;
};

const Button = styled.button`
	padding: 4px 8px;
	min-width: 60px;
	height: 30px;
	border-radius: 4px;
	border: none;
	outline: none;
	margin-right: 10px;
	cursor: pointer;
	&:last-child {
		margin-right: 0;
	}
	&:disabled {
		background-color: #b9b9b9;
		color: #4d4d4d;
	}
`;
