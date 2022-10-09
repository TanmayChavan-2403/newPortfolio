import styles from './list/list.module.css';
import React from 'react';


const Newtask = (props) => {
	return(
		<>
			<div className={styles.newTask}>
				<button id={styles.newTaskBtn} onClick={props.mountUnmount}>
					<span style={{fontSize: "1.3rem", margin: "0px 4px"}}>+</span>
					<p> New Task </p>
				</button>
			</div>
		</>
	)
}

export default Newtask;