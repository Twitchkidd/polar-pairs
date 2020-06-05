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
	const [level, setLevel] = useState(1);
	const [won, setWon] = useState(false);
	const handleWin = () => {
		setWon(true);
	};
	return (
		<>
			<Global />
			<AppWrap>
				<Game playerName='Gareth' level={level} win={handleWin} won={won} />
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
