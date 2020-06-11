import React from 'react';
import { Header } from '../components';

export const Welcome = ({ setPlayerName }) => {
	const handleSetPlayerName = e => {
		e.preventDefault();
		setPlayerName(e.target.playerName.value);
	};
	return (
		<Header>
			<h1 style={{ marginBottom: '-4px' }}>Polar Pairs!</h1>
			<p style={{ marginBottom: '2px' }}>with</p>
			<h2 style={{ marginBottom: '12px' }}>Penny the Purple Penguin</h2>
			<form onSubmit={e => handleSetPlayerName(e)}>
				<label htmlFor='playerName'>What's your name?</label>
				<div style={{ padding: '8px' }}>
					<input
						type='text'
						name='playerName'
						autoComplete='off'
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
