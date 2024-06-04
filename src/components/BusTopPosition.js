import { React } from 'react';

const BusTopPosition = () => {
	const bodyStyle = {
		width: '61vw',
		height: '20vw',
		backgroundColor: 'blue',
		position: 'absolute',
		border: '5px solid black',
		borderTopLeftRadius: '10%',
		borderTopRightRadius: '8%',
		top: '25%',
		left: '18%',
		margin: 'auto',
	};

	return (
		<div style={ bodyStyle }/>
	);
};

export default BusTopPosition;
