import React from 'react';

export const AskName = ({ setPlayerName }) => {
	const handleSetPlayerName = e => {
		e.preventDefault();
		setPlayerName(e.target.playerName.value);
	};
	return (
		<form onSubmit={e => handleSetPlayerName(e)}>
			<label htmlFor='playerName'>What's your name?</label>
			<input type='text' name='playerName' />
			<input type='submit' value='sumbit' />
		</form>
	);
};
