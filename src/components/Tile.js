import React from 'react';
import styled from 'styled-components';
import { eigengrau, green } from '../utils';

const StyledTile = styled.div`
	color: ${props => props.color};
	height: 160px;
	width: 100px;
	border: ${props => (props.status === 'active' ? '3' : '2')}px solid
		${props => (props.status === 'correct' ? green : eigengrau)};
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	${props =>
		props.color === '#efefef' ? `text-shadow: 1px 1px 2px ${eigengrau};` : null}
`;

const TileGrid = styled.div`
	width: 400px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 24px;
`;

export const Tile = ({ friend, status, onGuess, id }) => {
	return (
		<StyledTile
			id={id}
			status={status}
			color={friend.colorValue}
			onClick={e => onGuess(e)}>
			{status !== 'inactive'
				? `${friend.name} the ${friend.color} ${friend.animal}`
				: null}
		</StyledTile>
	);
};

Tile.Grid = TileGrid;
