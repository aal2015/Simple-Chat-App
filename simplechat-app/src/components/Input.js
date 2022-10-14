import classes from './Input.module.css';
import { useState } from 'react';
import { db } from '../firebase/firebaseConfig';

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Input(props) {
    const [message, setMessage] = useState("");

    const addMessage = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "chat"), {
                name: props.user.displayName,
                photoURL: props.user.photoURL,
                text: message,
                uid: props.user.uid,
                textCreatedAt: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
            setMessage("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (<form id={classes.grid_container} onSubmit={addMessage}>
        <input
            type="text"
            id={classes.chat_input}
            value={message}
            onChange={e => { setMessage(e.target.value) }}
            placeholder="Type Message"
            autoComplete="off"
            disabled={props.user ? false : true}
        />

        <button
            id={classes.submit_button}
            type="submit"
            disabled={props.user ? false : true}
        >
            Send <i className="bi bi-send-fill"></i>
        </button>
    </form>);
}

export default Input;