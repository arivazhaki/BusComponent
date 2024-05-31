import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import WheelBack from './components/WheelBack';

const App = (context) =>
	<div className="App">
		<Bus { ...context }/>
		<WheelBack { ...context }/>
		<div className="headlight"/>
		<div className="half-circle"/>
		<div className="front"/>
		<div className="windshield"/>
		<div className="frontClass"/>
	</div>;

export default App;
