import React, { Component } from 'react';
import moment from 'moment'
import { GoogleHurricaneMap, CustomHurricaneMap, SeansHurricaneMap } from './components/Maps.js'

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
				<div className="last-update"><h2>LAST UPDATE {moment('2017-09-10T13:34:47-04:00').fromNow()}</h2></div>
				<h2 className="title">Google's Live Update Map</h2>
				<GoogleHurricaneMap />

				<h2 className="title">Sean Kelly's Live Update Map</h2>
				<SeansHurricaneMap />

				<h2 className="title">Custom Hurricane Map</h2>
				<p>This map uses <code>.kml</code> data from the <a href="http://www.nhc.noaa.gov/gis/archive_forecast_results.php?id=al11&year=2017" target="_blank" rel="noopener noreferrer">NHC</a></p>
				<CustomHurricaneMap />
			</div>
		);
	}
}

export default App;
