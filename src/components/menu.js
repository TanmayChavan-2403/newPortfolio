import PCMenu from './menus/PCMenu.js'
import React, { useEffect, useState } from 'react';
import MobileMenu from './menus/mobileMenu.js'
import style from '../stylesheets/menu.module.css';
import homeStyle from '../stylesheets/home.module.css'
const Menu = (props) => {
	const [isPcMenu, setIsPcMEnu ]	= useState(true)

	useEffect(() => {
		if (window.screen.width <= 600){
			setIsPcMEnu(false);
		}
	}, [])

	return(
		<>
			<aside id={style.menu} style={props.menuStyle} >
				{/*<img className={style.img} onClick={() => props.toggle('Hobbies')} src="./icons/Menu.png" />*/}
				<div className={style.menuCharacter} style={props.height}>
					<img src="./wolfs/menu.png" />
				</div>
		
				{
					isPcMenu ? 
					<PCMenu 
						width={props.width} animate={props.animate}
						scale={props.scale} height={props.height2} 
						animateComponent={props.animateComponent}
					/> :
					<MobileMenu
						animate={props.animate} animateComponent={props.animateComponent}
						width={props.width} height={props.height}
					/>
				}
			</aside>
		</>
	)
}

export const MenuButton = (props) => {
	return(
		<div id={homeStyle.sec3}>
	        <img src="./icons/menu.svg" onClick={props.animate} />
	    </div>
	)
}

export default Menu;