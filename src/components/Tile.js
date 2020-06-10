import React from 'react';
import styled from 'styled-components';
import { eigengrau, green } from '../utils';

const TileText = styled.p`
	${props =>
		props.status === ('active' || 'correct') ? null : `visibility: hidden;`}
`;

const StyledTile = styled.div`
	color: ${props => props.color};
	border: ${props => (props.status === 'active' ? '3' : '2')}px solid
		${props => (props.status === 'correct' ? green : eigengrau)};
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	${props =>
		props.color === '#efefef' ? `text-shadow: 1px 1px 2px ${eigengrau};` : null}
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	text-align: center;
`;

const TileGrid = styled.div`
	width: 30em;
	max-width: 100%;
	height: 100%;
	max-height: 800px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: minmax(100px, 1fr);
	grid-gap: 0.5em;
	padding: 1em;
`;

export const Tile = ({ friend, status, onGuess, id }) => {
	return (
		<StyledTile
			id={id}
			status={status}
			color={friend.colorValue}
			onClick={e => onGuess(e)}>
			<TileText
				status={
					status
				}>{`${friend.name} the ${friend.color} ${friend.animal}`}</TileText>
		</StyledTile>
	);
};

Tile.Grid = TileGrid;
