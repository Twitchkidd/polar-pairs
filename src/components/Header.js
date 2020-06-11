import React from 'react';
import styled from 'styled-components';
import { above, darkPurple } from '../utils';

const StyledHeader = styled.header`
	background-color: ${darkPurple};
	${above.med`
		border-radius: 1em;
		`}
	max-height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	color: white;
	padding: 1em;
`;

export const Header = ({ children }) => {
	return <StyledHeader>{children}</StyledHeader>;
};
