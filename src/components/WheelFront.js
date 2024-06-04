import { React } from 'react';

const WheelFront = (context) => {
	const { data: { marginLeft, marginRight }} = context;

	return (
		<div>
			<div style={ {
				width: '12vw',
				height: '12vW',
				backgroundColor: 'black',
				borderRadius: '50%',
				top: '160px',
				border: 'grey',
				left: marginLeft,
				right: marginRight,
				position: 'absolute',
				margin: '25% auto',
			} }
			/>
		</div>);
};

export default WheelFront;
