/* eslint-disable max-lines-per-function */
import { React } from 'react';

const WheelFront = () => {
	const wheel = {
		width: '12vw',
		height: '12vW',
		backgroundColor: 'black',
		borderRadius: '50%',
		Right: '25%',
		left: '57%',
		top: '160px',
		border: 'grey',
		position: 'absolute',
		margin: '25% auto',
	};

	return (
		<div style={ wheel }/>
	);
};

export default WheelFront;
