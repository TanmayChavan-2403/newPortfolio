import { getFirestore } from "firebase/firestore";
import { deleteField, updateDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";

import app, { messaging } from "./CONFIG.js"

const db = getFirestore(app);

export const fetchTasks = (path) => {
	return new Promise( async (resolve, reject) => {
		const docRef = doc(db, "todo's", path)
		const docSnap = await getDoc(docRef)
		if (docSnap.exists()){
			resolve(docSnap.data())
		} else {
			reject("No such document!")
		}
	})
}

export const markCompleted = () => {
	return new Promise( (resolve, reject) => {
		const docRef = doc(db, )
	})
}

export const markInCompleted = (action) => {
	return new Promise( (resolve, reject) => {
		const docRef = doc(db, )
	})
}