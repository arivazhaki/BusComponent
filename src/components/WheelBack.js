/* eslint-disable max-lines-per-function */
import { React } from 'react';

const WheelBack = () => {
	const wheel = {
		width: '12vw',
		height: '12vW',
		backgroundColor: 'black',
		borderRadius: '50%',
		Left: '23%',
		right: '60%',
		top: '160px',
		border: 'grey',
		position: 'absolute',
		margin: '25% auto',
	};

	return (
		<div style={ wheel }/>
	);
};

export default WheelBack;
