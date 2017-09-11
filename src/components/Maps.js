import React from 'react'
// import { PropTypes as T } from 'prop-types'

const GoogleHurricaneMap = () => {

	return (
		<div className="embed-container">
			<iframe
				width="400"
				height="400"
				title="google-hurricane-map"
				src="https://google.org/crisismap/usa?hl=en&llbox=29.625%2C25.194%2C-77.131%2C-86.316&t=TERRAIN&layers=12%2C31%2C32%2Clayer1%2Clayer9%2Clayer8%2C2%2C1340721332252%3A17%2C30&embedded=true"
			></iframe>
		</div>
	)
}

export { GoogleHurricaneMap }

const SeansHurricaneMap = () => {

	return (
		<div className="embed-container">
			<iframe
				src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT9RRf5hDieaGElhWWu8HhVb_tGFEz-_EOuauu6lwXaKxZQmeMcVdqDSP11Zvh5dxSjto5O62tU8aAy/pubhtml?widget=true&amp;headers=false"
				title="sean-hurricane-map"
				width="600"
				height="650" 
				allowFullScreen
			></iframe>
		</div>
	)
}

export { SeansHurricaneMap }

const CustomHurricaneMap = () => {

	return (
		<div className="embed-container">
			<iframe
				title="custom-hurricane-map"
				src="https://www.google.com/maps/d/u/0/embed?mid=1Z64_hiOwywFjhDk2MzuFT2Tg8Is"
				width="600"
				height="650"
				//allowFullScreen
			></iframe>
		</div>
	)
}

export { CustomHurricaneMap }