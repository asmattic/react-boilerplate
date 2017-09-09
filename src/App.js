import React, { Component } from 'react';

import { GoogleHurricaneMap, CustomHurricaneMap } from './components/Maps.js'

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
				<h4>Custom Hurricane Map</h4>
				<p>This map uses <code>.kml</code> data from the <a href="http://www.nhc.noaa.gov/gis/archive_forecast_results.php?id=al11&year=2017" target="_blank" rel="noopener noreferrer">NHC</a></p>
				<CustomHurricaneMap />
			</div>
		);
	}
}

export default App;
