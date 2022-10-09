import React, { Component } from 'react'
import style from './cube.module.css';

class Cube extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className={style.cube} style={this.props.styles}>
				{!this.props.text ? 
					<img src={"./logo/" + this.props.src} /> : 
					<>
						<img onClick={() => this.props.animateComponent(this.props.text)}
							style={{
								objectFit: 'cover',
								transition: "1s",
								objectPosition: "center",
								width: this.props.imgDim ? this.props.imgDim : "150%",
								height: this.props.imgDim ? this.props.imgDim : "150%",
								opacity:this.props.opacity
							}}
							src={this.props.src}
						/>
						<h1 
							style={{
								opacity:"1",
								color: this.props.color,
								position: 'absolute',
								fontSize: this.props.fontSize,
								whiteSpace: this.props.wrap
							}}
						>
							{this.props.text}
						</h1>

					</>
				}
			</div>
		)
	}
}
 
export default Cube;