import React, { useState } from 'react';
import styled from 'styled-components';
import { eigengrau } from '../utils';

const StyledTile = styled.div`
	color: ${props => props.color};
	height: 160px;
	width: 100px;
	border: 2px solid ${eigengrau};
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

export const Tile = ({ friend, status, onToggle }) => {
	return (
		<StyledTile
			status={status}
			color={friend.colorValue}
			onClick={e => onToggle(e, friend.name)}>
			{status === 'toggled'
				? `${friend.name} the ${friend.color} ${friend.animal}`
				: null}
		</StyledTile>
	);
};

Tile.Grid = TileGrid;
