
import './css/Map.css';

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import Navigation from '../components/Navigation';
import Toilet from '../components/Toilet';

const containerStyle = {
	width: '100vw',
	height: '100vh'
};

const center = {
	lat: 55.8616828918457,
	lng: -4.25833797454834
};

const zoom = 12;

function Map() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyDwm9VUqFhd24Zi7sctjuThettwTa8h3Fg"
	});

	const setMap = React.useState(null)[1];

	const onLoad = React.useCallback(function callback(map) {
		setMap(map);
	}, [setMap])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, [setMap])

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={zoom}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Navigation />
			<Toilet />
		</GoogleMap>
	) : <></>
}

export default Map;