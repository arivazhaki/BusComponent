import { React } from 'react';

const WindowFive = () => {
	const buswindow = {
		width: '5vw',
		height: '10vw',
		backgroundColor: '#e0e0e0',
		border: '10px solid #000',
		position: 'absolute',
		overflow: 'hidden',
		borderRadius: '10px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
		top: '80px',
		left: '63%',
		margin: '10% auto',
	};

	return (
		<div style={ buswindow }/>
	);
};

export default WindowFive;
