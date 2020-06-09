import React from 'react';
import { Header } from '../components';

export const AskName = ({ setPlayerName }) => {
	const handleSetPlayerName = e => {
		e.preventDefault();
		setPlayerName(e.target.playerName.value);
	};
	return (
		<Header>
			<form onSubmit={e => handleSetPlayerName(e)}>
				<label htmlFor='playerName'>What's your name?</label>
				<div style={{ padding: '8px' }}>
					<input
						type='text'
						name='playerName'
						style={{ borderRadius: '8px' }}
					/>
					<input
						type='submit'
						value='OK'
						style={{ marginLeft: '4px', borderRadius: '8px', padding: '4px' }}
					/>
				</div>
			</form>
		</Header>
	);
};
