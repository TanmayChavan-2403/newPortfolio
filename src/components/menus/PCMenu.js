import style from '../../stylesheets/menu.module.css';
import React from 'react';
import Cube from '../cube/cube.js'

const PCMenu = (props) => {
	const style1 = {
		backgroundColor: "white",
		width:"296px", height: "296px",
		transform: props.scale["prop1"],
		transition: "0.8s"
	}

	return(
		<div className={style.menuOptions}>
			<div className={style.menuWrapper1}>
				<div className={style.menuAnimationWrapper1} style={props.width}>
					<div className={style.menuTiles}>
						<div id={style.sec1}>
							<Cube
								styles={style1} opacity ="0.3"
								fontSize="3rem" text="HOME" src="./bg/Home COVER.png" animateComponent={props.animateComponent}/>	
							<div id={style.sec3}>
								<Cube 
									styles={{backgroundColor: "white", width:"135px", height: "135px", transform: props.scale["prop4"], transition: "0.8s"}}
									fontSize="1rem" text="Projects" src="./bg/projects COVER.jpg" opacity ="0.3"
									animateComponent={props.animateComponent}
								 />	
								 <Cube 
									styles={{backgroundColor: "white", width:"135px", height: "135px", transform: props.scale["prop5"], transition: "0.8s"}}
									fontSize="1rem" text="Contact Me" src="./bg/projects COVER.jpg"
									wrap = "nowrap" animateComponent={props.animateComponent} opacity ="0.3"
								 />	
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.menuWrapper2} style={props.height}>
				<div className={style.menuTiles2}>
					<div id={style.sec2}>
						<Cube 
							styles={{backgroundColor: "white", width:"135px", height: "135px", transform: props.scale["prop2"], transition: "0.8s"}}
							fontSize="1rem" text="Certifications" src="./bg/certifications.jpg" opacity ="0.3"
							animateComponent={props.animateComponent}
						 />	
						 <Cube 
							styles={{backgroundColor: "white", width:"135px", height: "135px", transform: props.scale["prop3"], transition: "0.8s"}}
							fontSize="1rem" text="Todo's" src="./bg/projects COVER.jpg" opacity ="0.3"
							animateComponent={props.animateComponent}
						 />	
						 <Cube 
							styles={{backgroundColor: "white", width:"135px", height: "135px", transform: props.scale["prop6"], transition: "0.8s"}}
							fontSize="1rem" text="Hobbies" src="./bg/projects COVER.jpg" opacity ="0.3"
							animateComponent={props.animateComponent}
						 />	
					</div>
				</div>
			</div>
		</div>
	);
}

export default PCMenu