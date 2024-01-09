
import './css/BackToMap.css'
import React, { useState, useEffect, useCallback } from 'react'

let language = navigator.language;

const text = {
	'en': {
		button_1: 'Back to Map'
	},
	'en-GB': {
		button_1: 'Back to map'
	},
	'zh-CN': {
		button_1: '回到地图'
	},
	'zh-TW': {
		button_1: ''
	}
}

if (text[language] === undefined) {
	language = 'en';
}

function BackToMap() {

	const [clicked, setClicked] = useState(false);

	const onClick = useCallback(() => {
		console.log('/');
		window.location.href = '/';
	}, []);  // 空数组表示没有依赖项，只在组件挂载时创建一次

	useEffect(() => {

		if (clicked) {
			onClick();
			setClicked(false);
		}

	}, [clicked, onClick]);

	return (
		<div
			className="BackToMap"
			onClick={() => setClicked(true)}
		>
			<p>{text[language].button_1}</p>
		</div>
	);
}

export default BackToMap