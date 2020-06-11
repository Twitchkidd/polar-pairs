import React, { useState } from 'react';
import styled from 'styled-components';
import Global from './Global';
import { Congrats, Game, Welcome } from './screens';

const AppWrap = styled.div`
	height: 100vh;
	width: 100vw;
	max-width: 60em;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	const [playerName, setPlayerName] = useState(null);
	const [level, setLevel] = useState(1);
	const [won, setWon] = useState(false);
	const [stars, setStars] = useState(0);
	const handleWin = () => {
		setWon(true);
	};
	const nextLevel = () => {
		console.log('...eh hello?');
		setLevel(level + 1);
		setWon(false);
	};
	const playAgain = () => {
		setWon(false);
	};
	return (
		<>
			<Global />
			<AppWrap>
				{/* <Game playerName='Gareth' level={level} win={handleWin} won={won} /> */}
				{playerName ? (
					won ? (
						<Congrats
							playerName={playerName}
							level={level}
							stars={stars}
							nextLevel={nextLevel}
							playAgain={playAgain}
						/>
					) : (
						<Game
							playerName={playerName}
							level={level}
							setStars={setStars}
							win={handleWin}
						/>
					)
				) : (
					<Welcome setPlayerName={setPlayerName} />
				)}
			</AppWrap>
		</>
	);
};

export default App;
