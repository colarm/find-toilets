
import './css/Toilet.css'
import React, { useState, useEffect, useCallback } from 'react'
import { Marker } from "@react-google-maps/api";

function Toilet() {

	const Toilets = [
		{
			position: { lat: 55.8642, lng: -4.2518 },
			code: 10000
		}
	];

	const [clicked, setClicked] = useState(false);

	const onClick = useCallback(() => {
		console.log('You guess what? ');
	}, []);  // 空数组表示没有依赖项，只在组件挂载时创建一次

	useEffect(() => {
		
		if (clicked) {
			onClick();
			setClicked(false);
		}

	}, [clicked, onClick]);

	return (
		<div className='Toilet'>
			<Marker
				position={Toilets[0].position}
				onClick={() => setClicked(true)}
				icon={{
					url: "./favicon.ico",
					scaledSize: new window.google.maps.Size(20, 20),
				}}
			/>
		</div>
	)
}

export default Toilet