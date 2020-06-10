import React from 'react';
import styled from 'styled-components';
import { lightPurple } from '../utils';

const StyledHeader = styled.header`
	background-color: ${lightPurple};
	border-radius: 1em;
	max-height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: white;
	padding: 1em;
`;

export const Header = ({ children }) => {
	return <StyledHeader>{children}</StyledHeader>;
};
