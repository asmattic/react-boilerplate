import React, { Component } from 'react';

import GoogleHurricaneMap from './components/GoogleHurricaneMap.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Irma Street Survival Squad</h2>
				</div>
				<h4>Google's Live Update Map</h4>
				<GoogleHurricaneMap />
			</div>
		);
	}
}

export default App;
