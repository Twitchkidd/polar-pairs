import React from 'react';
import { Header } from '../components';

export const Congrats = ({
	playerName,
	level,
	lastGuessCount,
	stars,
	nextLevel,
	tryAgain,
}) => {
	return (
		<Header>
			<h1>Congratulations {playerName}!</h1>
			<h2>You won!</h2>
			{level >= 2 ? (
				<>
					<p>That took {lastGuessCount} guesses!</p>
					<p>
						You got {stars} stars! {`★`.repeat(stars)}
						{`☆`.repeat(3 - stars)}
					</p>
					<button onClick={() => tryAgain()}>Try again?</button>
				</>
			) : null}
			<button disabled={level > 1 ? true : false} onClick={() => nextLevel()}>
				Play level {level + 1}!
			</button>
		</Header>
	);
};
