import { React } from 'react';
import BusBody from './BusBody';
import BusTopPosition from './BusTopPosition';
import DoorLeft from './DoorLeft';
import DoorRight from './DoorRight';
import Window from './Window';
import WindowSecond from './WindowSecond';
import WindowThird from './WindowThird';
import WindowFour from './WindowFour';
import WindowFive from './WindowFive';
import WheelBack from './WheelBack';
import WheelFront from './WheelFront';
import HubFront from './HubFront';

const Bus = (context) =>
	<div>
		<BusTopPosition { ...context }/>
		<BusBody { ...context }/>
		<DoorLeft { ...context }/>
		<DoorRight { ...context }/>
		<Window { ...context }/>
		<WindowSecond { ...context }/>
		<WindowThird { ...context }/>
		<WindowFour { ...context }/>
		<WindowFive { ...context }/>
		<WheelBack { ...context }/>
		<WheelFront { ...context }/>
		<HubFront { ...context }/>
	</div>;

export default Bus;
