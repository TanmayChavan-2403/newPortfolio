import {useState, useRef } from 'react'
import './main.css';

const Main = (props) => {
	let [shouldRender, setRender] = useState(false)
	const frameDiv = useRef();

	const main = {
		width: "100%",
		height: "100vh",
		display: "flex",
		overflow: "hidden",
		backgroundColor : "#242424",
	}

	const toggle = () => {
		console.log(frameDiv)
		frameDiv.current.style.transform = 'scale(1)';
	}

	return(
		<div style={main}>
			<button onClick={toggle}>Click Me</button>
			<div id = "frame" >
			</div>
			<div id ="frame2" ref={frameDiv}>
				<div id="content">  </div>
			</div>
		</div>
	)
}

export default Main