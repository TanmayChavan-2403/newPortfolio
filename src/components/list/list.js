import React, { Component, useRef } from 'react';
import style from './list.module.css';

class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			isComplete: props.isComplete,
			id: props.id,
			arr: props.arr
		}
		this.menu = React.createRef();
	}

	check = (id) => {
		// if (this.state.isComplete){
		// 	// Add to incompleted list
		// 	console.log('Trigerring markInCompleted')
		// 	// markInCompleted(id, this.props.task, arr)
			
		// } else {
		// 	// Add to completed list
		// 	console.log('Trigerring markCompleted')
		// 	// markCompleted(id, this.props.task, arr)
		// }

		this.setState(state => {
			return {
				isComplete: !state.isComplete
			}
		})
	}

	render(){
		return(
			<div className={style.list}>
				<div className={style.checkBox} onClick={() => this.check(this.state.id)}>
					<div className={style.radioBtn}>
						{
							this.state.isComplete ? 
							<img src="./icons/checkmark.svg" /> :
							null
						}
					</div>
				</div>
				<div className={style.meaning}>
					{
						this.state.isComplete ?
						<s><p style={{color: 'grey'}}> {this.props.task} </p></s> :
						<p> {this.props.task} </p>
					}
				</div>
				<div className={style.delete}>
					<img src="./icons/delete.png" />
				</div>
			</div>
		);
	}
}

export default List;
