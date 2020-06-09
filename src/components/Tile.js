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
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(6em, 1fr));
	grid-template-rows: minmax(8em, auto);
	grid-gap: 1em;
	padding: 1em;
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
