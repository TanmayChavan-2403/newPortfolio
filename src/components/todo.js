import Title from './title/title.js'
import List from './list/list.js';
import NewTask from './newTask.js';
import React, {useState, useEffect} from 'react';
import styles from '../stylesheets/modal.module.css'
import style from '../stylesheets/todo.module.css'

const Todo = (props) => {

	const [scale, setScale] = useState("scale(0)")
	const [task, setTaskValue] = useState("");
	const [modal, setModal] = useState("-100px")
	const [inCompleteTaskList, setIncompleteTaskList] = useState([])
	const [completeTaskList, setCompleteTaskList] = useState([])

	const updateOverlayStatus = param => {
		if (scale == "scale(0)"){
			setScale("scale(1)");
			return;
		}
		setScale('scale(0)');
	}

	const submit = param => {
		setModal('10px')
	}

	// useEffect(() => {
	// 	fetchTasks('incomplete')
	// 	.then(res => {
	// 		setIncompleteTaskList(res["tasks"]);
	// 		fetchTasks('complete')
	// 		.then(resp => setCompleteTaskList(resp['tasks']))
	// 		.catch(err => console.log(err))
	// 	})
	// 	.catch(err => console.error(err))
	// }, [])

	return(
		<div className={style.todo} style={props.width}>
			<Modal modal={modal} setModal={setModal}/>
			<Title text="Todo's" />
			<div className={style.OuterWrapper}>
				<div className={style.InnerWrapper}>
					{
						inCompleteTaskList.map(list => {
							return(
								<List task={list} isComplete={false}/>
							)
						})
					}

					{
						completeTaskList.map(list => {
							return(
								<List task={list} isComplete/>
							)
						})
					}

				</div>	
				<div className={style.newTaskcont}>
					<button onClick={updateOverlayStatus}>
						Add new task
					</button>
				</div>			
			</div>
			<div className={style.overLay} style={{transform: scale}}>
				<div className={style.overLayCont}>
					<div className={style.closeBtn}>
						<img src="./icons/close.svg" onClick={updateOverlayStatus} />
					</div>
					<div className={style.taskEntry}>
						<input placeholder="Type task here..." 
						onChange={(e) => setTaskValue(e.target.value)}
						value={task}/>
					</div>
					<div className={style.submitBtn}>
						<button onClick={submit}> Add </button>
					</div>
				</div>
			</div>
		</div>
	)
}

const Modal = (props) => {

    const closeModal = (param) => {
        props.setModal('-100px')
    }

    return(
        <div id={styles.modal} style={{top: props.modal}}>
            <div className={styles.colorBar}></div>
            <div className={styles.logoSec}>
                <img src="icon.png" />
            </div>
            <div className={styles.message}>
                <p>Uploaded successfully</p>
            </div>
            <div onClick={closeModal} className={styles.closeButton}>
                <img src="./icons/modalClose.svg"/>
            </div>
        </div>
    );
}

export default Todo;
