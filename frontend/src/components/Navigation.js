
import './css/Navigation.css'
import React, { useState, useEffect, useCallback } from 'react'

let language = navigator.language;

const text = {
	'en': {
		button_1: 'Menu',
		button_2: 'Settings'
	},
	'en-GB': {
		button_1: 'Menu',
		button_2: 'Settings'
	},
	'zh-CNz': {
		button_1: '菜单',
		button_2: '设置'
	},
	'zh-TW': {
		button_1: '',
		button_2: ''
	}
}

if (text[language] === undefined) {
	language = 'en';
}

function Navigation() {

	const NavigationButtons = [
		{
			id: 0,
			name: text[language].button_1,
			link: '/Menu'
		},
		{
			id: 1,
			name: text[language].button_2,
			link: '/Settings'
		}
	]

	const [clicked, setClicked] = useState(false);

	const onClick = useCallback((link) => {
		console.log(link);
		window.location.href = link;
	}, []);  // 空数组表示没有依赖项，只在组件挂载时创建一次

	useEffect(() => {

		if (clicked!== false) {
			onClick(clicked.link);
			setClicked(false);
		}

	}, [clicked, onClick]);

	return (
		<div className='NavigationBar'>
			{NavigationButtons.map(item => (
				<div
					className="Navigation"
					onClick={() => setClicked(item)}
					key={item.id}>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
}

export default Navigation