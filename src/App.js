import React, { useState } from 'react';
import styled from 'styled-components';
import Global from './Global';
import { AskName, Game } from './screens';

const AppWrap = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	padding-top: 80px;
	text-align: center;
`;

const App = () => {
	const [playerName, setPlayerName] = useState(null);
	const [won, setWon] = useState(false);
	const handleWin = () => {
		console.log('Good job!');
		setWon(true);
	};
	return (
		<>
			<Global />
			<AppWrap>
				<Game playerName='Gareth' win={handleWin} />
			</AppWrap>
			{/* {playerName ? (
				<Game playerName={playerName} />
			) : (
				<AskName setPlayerName={setPlayerName} />
			)} */}
		</>
	);
};

export default App;
