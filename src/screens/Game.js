import React, { useState, useEffect } from 'react';
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

/*
	Okay, so I need to have a record of all of them for the win-condition
*/

export const Game = ({ playerName, win }) => {
	const [level, setLevel] = useState(1);
	const [guess, setGuess] = useState('');
	const [corrects, setCorrects] = useState(0);
	const doubledFriends = [...friends, ...friends];
	const doubleShuffled = shuffle(doubledFriends);
	const handleToggle = (e, name) => {
		console.log(e.target);
		console.log(name);
	};
	useEffect(() => {
		if (corrects === friends.length) {
			win();
		}
	}, [corrects])
	return (
		<div>
			<h3>Welcome {playerName}!</h3>
			<p>Match the cards to win the game!</p>
			<p>Level {level}</p>
			<Tile.Grid>
				{doubleShuffled.map((friend, i) => {
					return <Tile key={i} friend={friend} onToggle={handleToggle} />;
				})}
			</Tile.Grid>
		</div>
	);
};
