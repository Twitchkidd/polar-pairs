import React, { useState, useEffect } from 'react';
import { friends } from '../data';
import { Header, Tile } from '../components';

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

export const Game = ({ playerName, level, win, won }) => {
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
		const eventId = e.target.id;
		if (!guess) {
			let newTiles = [...tiles];
			newTiles[eventId].status = 'active';
			setGuess(tiles[eventId]);
			setTiles(newTiles);
		} else {
			if (eventId == guess.id) {
				return;
			} else if (tiles[eventId].name === guess.name) {
				let newTiles = [...tiles];
				newTiles[eventId].status = 'correct';
				newTiles[guess.id].status = 'correct';
				setTiles(newTiles);
				setCorrects(corrects + 1);
				setGuess(null);
			} else {
				let newTiles = [...tiles];
				newTiles[eventId].status = 'incorrect';
				newTiles[guess.id].status = 'incorrect';
				setTiles(newTiles);
				setTimeout(() => {
					let newTiles = [...tiles];
					newTiles[eventId].status = 'inactive';
					newTiles[guess.id].status = 'inactive';
					setGuess(null);
					setTiles(newTiles);
				}, 400);
			}
		}
	};
	useEffect(() => {
		if (corrects === friends.length) {
			win();
		}
	}, [corrects]);
	return (
		<>
			<Header>
				<h3>Welcome {playerName}!</h3>
				<p>Match the cards to win the game!</p>
				<p>Level {level}</p>
			</Header>
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
			{won ? <p>You Won! Congratulations!</p> : null}
		</>
	);
};
