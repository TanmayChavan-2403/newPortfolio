import React from 'react';
import style from '../stylesheets/home.module.css'
import { MenuButton } from './menu.js';
import Cube from './cube/cube.js';

const Home = (props) => {
	const paddingBottom = "22%"
	const margin = "8px"
	return(
		<>
			<div id={style.home}>
				<div id={style.sec1}>
					<div className={style.intro}>
						<h1><span>TANMAY</span> CHAVAN </h1>
						<p>I am a full stack web developer with an aim to master and hone my skills </p>
					</div>
					<div className={style.techTiles}>
							<Cube styles={{backgroundColor: "#3771A1", paddingBottom, margin}} text={false} src="python.png" />
							<Cube styles={{backgroundColor: "#F0DB4F", paddingBottom, margin}} text={false} src="Javascript.png" />
							<Cube styles={{backgroundColor: "#379AD6", paddingBottom, margin}} text={false} src="CSS.png" />
							<Cube styles={{backgroundColor: "#E44D26", paddingBottom, margin}} text={false} src="HTML.png" />
							<Cube styles={{backgroundColor: "#292929", paddingBottom, margin}} text={false} src="Reactjs.png" />
							<Cube styles={{backgroundColor: "#F2F2F2", paddingBottom, margin}} text={false} src="nodejs.png" />
							<Cube styles={{backgroundColor: "#333333", paddingBottom, margin}} text={false} src="express.png" />
							<Cube styles={{backgroundColor: "#4479A1", paddingBottom, margin}} text={false} src="Mysql.png" />
							<Cube styles={{backgroundColor: "#d1d3d4", paddingBottom, margin}} text={false} src="scrapy.png" />
							<Cube styles={{backgroundColor: "#f57f17", paddingBottom, margin}} text={false} src="firebase.png" />
							<Cube styles={{backgroundColor: "#ffffff", paddingBottom, margin}} text={false} src="dsa.png" />
							<Cube styles={{backgroundColor: "#f6f4ce", paddingBottom, margin}} text={false} src="mongodb.png" />
							<Cube styles={{backgroundColor: "#3773a5", paddingBottom, margin}} text={false} src="tkinter.png" />
					</div>
				</div>
				<div id={style.sec2}>
					<img src="./wolfs/intro.png" />
				</div>

            	<MenuButton animate={props.animate}/>
				
			</div>	
		</>
	)
}

export default Home;