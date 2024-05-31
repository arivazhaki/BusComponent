import { React } from 'react';

const BusTopPosition = () => {
	const bodyStyle = {
		width: '53vw',
		height: '20vw',
		backgroundColor: 'blue',
		position: 'absolute',
		border: '2px solid black',
		borderTopLeftRadius: '10%',
		top: '25%',
		left: '19%',
		margin: 'auto',
	};

	return (
		<div style={ bodyStyle }/>
	);
};

export default BusTopPosition;
