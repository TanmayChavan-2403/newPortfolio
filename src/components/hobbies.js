import React, { useEffect, useState } from 'react';
import Cube from './cube/cube.js'
import Title from './title/title.js'
import style from '../stylesheets/hobbies.module.css'

const Hobbies = (props) => {

	return(
		<>
			<div className={style.hobbies} style={props.width} onClick={() => props.animate('Hobby')}>
				<Title text="Hobbies" />
				<div className={style.OuterWrapper}>
					<div className={style.InnerWrapper}>
						<GridContainer text="Reading Novel" image="./bg/Novel.jpg" />
						<GridContainer text="Playing badminton" image="./bg/Badminton.jpg" />
						<GridContainer text="Playing chess" image="./bg/Chess.jpg" />
						<GridContainer text="Working on projects" span image="./bg/Programming.jpg" />
						<GridContainer text="Sketching" image="./bg/Sketching.jpg" />
						<GridContainer text="Problem solving" image="./bg/problemSolving.jpg" />
						<GridContainer text="Listening to songs" image="./bg/songs.jpg" />
						<GridContainer text="Cycling" image="./bg/cycling.jpg" />
						<GridContainer text="Watching series on weekends" span image="./bg/watching.jpg" />
					</div>
				</div>
			</div>
		</>
	)
}


export const GridContainer = (props) => {
	return(
		<>
		{
			props.span ? 
				<div className={style.hobbyCont + " " + style.gridColSpan2} style={{backgroundImage: `url(${props.image})`}}>
					<div className={style.hobbyName}>
						<h1> {props.text} </h1>
					</div>
				</div>
				:
				<div className={style.hobbyCont} style={{backgroundImage: `url(${props.image})`}}>
					<div className={style.hobbyName}>
						<h1> {props.text} </h1>
					</div>
				</div>
		}
		</>
	)
}

export default Hobbies