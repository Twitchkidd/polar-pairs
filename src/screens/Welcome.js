import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import useSound from 'use-sound';
import gangstaXmas from '../data/gangstaXmas.mp3';
// https://fresound.org/s/478570/

export const Welcome = ({ setPlayerName }) => {
	const [musicStarted, setMusicStarted] = useState(false);
	const [play, { stop }] = useSound(gangstaXmas);
	const handleSetPlayerName = e => {
		e.preventDefault();
		staaahp();
		setPlayerName(e.target.playerName.value);
	};
	const go = () => {
		play();
		setMusicStarted(true);
	};
	const staaahp = () => {
		stop();
		setMusicStarted(false);
	};
	return (
		<Header>
			<h1 style={{ marginBottom: '-4px' }}>Polar Pairs!</h1>
			<p style={{ marginBottom: '2px' }}>with</p>
			<h2 style={{ marginBottom: '12px' }}>Penny the Purple Penguin</h2>
			{!musicStarted ? (
				<button onClick={() => go()}>Play music!</button>
			) : (
				<button onClick={() => staaahp()}>Stop music :)</button>
			)}
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
