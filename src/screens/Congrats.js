import React from 'react';

export const Congrats = ({
	playerName,
	level,
	stars,
	nextLevel,
	playAgain,
}) => {
	return (
		<div>
			<h1>Congratulations {playerName}!</h1>
			<button onClick={() => nextLevel()}>Play next level!</button>
		</div>
	);
};
