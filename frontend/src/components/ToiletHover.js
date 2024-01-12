
import './css/ToiletHover.css'
import Toilet from './Toilet'

function ToiletHover() {
	return (
		<div className="ToiletHover">
			<Toilet position={{ lat: 55.8642, lng: -4.2518 }} />
			<Toilet position={{ lat: 55.8242, lng: -4.2418 }} />
			<Toilet position={{ lat: 55.8622, lng: -4.2618 }} />
			<Toilet position={{ lat: 55.8742, lng: -4.2508 }} />
		</div>
	)
}

export default ToiletHover