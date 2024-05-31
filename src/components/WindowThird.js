import { React } from 'react';

const WindowThird = () => {
	const buswindow = {
		width: '7vw',
		height: '10vw',
		backgroundColor: '#e0e0e0',
		border: '10px solid #000',
		position: 'absolute',
		overflow: 'hidden',
		borderRadius: '10px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
		top: '80px',
		left: '43%',
		margin: '10% auto',
	};

	return (
		<div style={ buswindow }/>
	);
};

export default WindowThird;
