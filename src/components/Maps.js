import React from 'react'
// import { PropTypes as T } from 'prop-types'

const GoogleHurricaneMap = () => {

	return (
		<iframe
			width="800"
			height="500"
			src="https://google.org/crisismap/usa?hl=en&llbox=28.832%2C26.753%2C-80.358%2C-84.885&t=TERRAIN&layers=12%2C30%2C31%2C32%2Clayer1%2C1340721332252%3A99%2C14&embedded=true"
			style={{border: '1px solid #ccc'}}
			title="google-hurricane-map"
		></iframe>
	)
}

export { GoogleHurricaneMap }

const CustomHurricaneMap = () => {

	return (
		<iframe
			title="custom-hurricane-map"
			src="https://www.google.com/maps/d/u/0/embed?mid=1Z64_hiOwywFjhDk2MzuFT2Tg8Is"
			width="640"
			height="480"
		></iframe>
	)
}

export { CustomHurricaneMap }