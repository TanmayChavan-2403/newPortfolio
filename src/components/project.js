import React from 'react';
import Title from './title/title.js'
import style from '../stylesheets/projects.module.css'
import {GridContainer} from './hobbies.js'

const Project = (props) => {
	return(
		<div className={style.project} style={props.width} onClick={() => props.animate('Projects')}>
			<Title text="Projects" />
			<div className={style.OuterWrapper}>
				<div className={style.InnerWrapper}>
					<a className={style.anchors} href="https://portfolio-59977.web.app/" target="_blank">
						<GridContainer text="Portfolio [OLD]" image="./project/portfolio-OLD.png" />
					</a>

					<GridContainer text="File Ranamer" image="./project/File-Renamer.png" />

					<GridContainer text="Otaku's Stash" image="./project/otakuStash.png" />

					<a className={style.anchors + ' ' + style.gridColSpan2} href="https://pokedex-1a4fe.web.app/" target="_blank">
						<GridContainer text="Portfolio NEW" image="./project/portfolio-NEW.png" />
					</a>

					<a className={style.anchors} href="https://pokedex-1a4fe.web.app/" target="_blank">
						<GridContainer text="Pokedex" image="./project/pokedex.png" />
					</a>

					<GridContainer text="Shop Management" image="./project/shop-management.png" />

					<a href="https://tanmaychavan-2403.github.io/Sprhava.github.io/index.html" target="_blank">
						<GridContainer text="Sprhava" image="./project/sprhava.png" />
					</a>

					<a className={style.anchors} href="https://uturn-enterprise.web.app/" target="_blank">
						<GridContainer text="U Turn enterprise" image="./project/u-turn-enterprise.png" />
					</a>

					<GridContainer text="Catch the thief" span image="./project/catch-thethief.png" />

					<a className={style.anchors + ' ' + style.gridColSpan2} href="https://myvocabspace.web.app/" target="_blank">
						<GridContainer text="My Meanings" image="./project/myMeanings.png" />
					</a>

					<a className={style.anchors} href="https://search-my-country.web.app/" target="_blank">
						<GridContainer text="Search My Country" image="./project/Search-My-Country.png" />
					</a>
					
				</div>				
			</div>
		</div>
	)
}

export default Project;
{/*<a href="" target="_blank"></a>*/}