import { useRef, useEffect } from 'react';
import classes from './ChatRoom.module.css';
import ChatMessage from './ChatMessage';
import { db } from '../firebase/firebaseConfig';

import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };


function ChatRoom(props) {
    const chatRef = collection(db, 'chat');
    const q = query(chatRef, orderBy("textCreatedAt"), limit(30));
    const [messages] = useCollectionData(q, { idField: 'id' });

    return (
        <div id={classes.background}>
            <>
            {messages && messages.map((message, id) => (
                <ChatMessage 
                    key={id} 
                    text={message.text} 
                    photoURL={message.photoURL} 
                    textCreatedAt={message.textCreatedAt} 
                    uid={message.uid}
                    current_uid={props.uid} 
                />
            ))}
            <AlwaysScrollToBottom />
            </>
        </div>
    );
}

export default ChatRoom;