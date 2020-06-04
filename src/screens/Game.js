import React, { useState } from 'react';
import { friends } from '../data';
import { Tile } from '../components';

// Fisher-Yates Shuffle Algorithm, an implementation
const shuffle = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export const Game = ({ playerName, win }) => {
	const [level, setLevel] = useState(1);
	const [guess, setGuess] = useState();
	const [corrects, setCorrects] = useState(0);
	const doubledFriends = [...friends, ...friends];
	const doubleShuffled = shuffle(doubledFriends);
	const [tiles, setTiles] = useState(
		doubleShuffled.map((friend, i) => ({
			...friend,
			status: 'inactive',
			id: i,
		}))
	);
	const handleGuess = e => {
		if (guess) {
			if (tiles[e.target.id].name === guess.name) {
				let newTiles = [...tiles];
				newTiles[e.target.id].status = 'correct';
				newTiles[guess.id].status = 'correct';
				setTiles(newTiles);
				setCorrects(corrects + 1);
				setGuess(null);
			} else {
				let newTiles = [...tiles];
				newTiles[e.target.id].status = 'inactive';
				newTiles[guess.id].status = 'inactive';
				setGuess(null);
				setTiles(newTiles);
			}
		} else {
			let newTiles = [...tiles];
			newTiles[e.target.id].status = 'active';
			setGuess(tiles[e.target.id]);
			setTiles(newTiles);
		}
	};
	if (corrects === friends.length) {
		win();
	}
	return (
		<div>
			<h3>Welcome {playerName}!</h3>
			<p>Match the cards to win the game!</p>
			<p>Level {level}</p>
			<Tile.Grid>
				{tiles.map((friend, i) => {
					return (
						<Tile
							id={i}
							key={i}
							friend={friend}
							onGuess={handleGuess}
							status={tiles[i].status}
						/>
					);
				})}
			</Tile.Grid>
		</div>
	);
};
