import React from 'react';
import styled from 'styled-components';
import { lightest } from '../utils';

const StyledHeader = styled.header`
	background-color: ${lightest};
	max-height: 120px;
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = ({ children }) => {
	return <StyledHeader>{children}</StyledHeader>;
};
