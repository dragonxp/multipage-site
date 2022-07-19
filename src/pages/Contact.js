import { useLocation } from 'react-router-dom'

export default function Contact() {
	const queryString = useLocation().search
	const queryParams = new URLSearchParams(queryString)
	const name = queryParams.get('name')

	return (
		<div>
			<h1>Hey {name}, Contact us here..</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat ea laborum tempore impedit quibusdam rerum voluptate repudiandae obcaecati cupiditate! Maxime, impedit ab? Inventore quibusdam officiis, commodi ipsam accusantium praesentium.</p>
		</div>
	)
}