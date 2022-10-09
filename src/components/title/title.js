import React from 'react';
import style from './title.module.css';

const Title = ({text}) => {
	return(
		<div id={style.titleOuterWrapper}>
			<div className={style.titleInnerWrapper}>
				<div className={style.blueBackground} />
				<div className={style.titleSupporter} />
				<h1>{text}</h1>
			</div>
		</div>
	)
}

export default Title