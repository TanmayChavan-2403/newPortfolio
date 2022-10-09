import React from 'react';
import style from '../../stylesheets/menu.module.css';

const MENU = (props) => {
		return(
			<li className={style.CTA} onClick={() => props.animate(props.text)}>
				<img src={"./bg/" + props.src} />
				<h1> {props.text} </h1>
			</li>
		)
	}

const MobileMenu = (props) => {
	
	return(
		<nav id={style.phoneMenu} style={props.height}>
			<ul>
				<MENU src="Home COVER.png" text="HOME" animate={props.animateComponent} />
				<MENU src="projects COVER.jpg" text="Projects" animate={props.animateComponent} />
				<MENU src="Social media COVER.png" text="Contact Me" animate={props.animateComponent} />
				<MENU src="certifications.jpg" text="Certifications" animate={props.animateComponent} />
				<MENU src="Todo COVER.png" text="Todo's" animate={props.animateComponent} />
				<MENU src="Hobbies COVER.jpg" text="Hobbies" animate={props.animateComponent} />
			</ul>
		</nav>
	)
}

export default MobileMenu