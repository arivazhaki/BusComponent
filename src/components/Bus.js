import { React } from 'react';
import BusBody from './BusBody';
import BusTopPosition from './BusTopPosition';
import DoorLeft from './DoorLeft';
import DoorRight from './DoorRight';
import WheelBack from './WheelBack';
import HubFront from './HubFront';
import WindowSecond from './WindowSecond';
import Mirror from './Mirror';

const Bus = (context) =>
	<div>
		<BusTopPosition { ...context }/>
		<BusBody { ...context }/>
		<DoorLeft { ...context }/>
		<DoorRight { ...context }/>
		<WindowSecond { ...context }/>
		<WheelBack { ...context }/>
		<HubFront { ...context }/>
		<Mirror { ...context }/>
	</div>;

export default Bus;
