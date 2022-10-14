import classes from './ChatMessage.module.css';

function ChatMessage(props) {
    let timeSend
    if (props.textCreatedAt) {
        timeSend = new Date(props.textCreatedAt.seconds*1000).toLocaleTimeString()
    }
    console.log(props.uid == props.current_uid);

    return (
        <div>
            <img 
                className={classes["avatar"]} 
                src={props.photoURL} 
                referrerpolicy="no-referrer"
            />
            <div className={classes["message-layout"] + " " + (props.uid == props.current_uid ? classes["personal-text"] : "")}>
                <p>{props.text}</p>
                <p className={classes["timeStamp"]}>{timeSend}</p>
            </div>
        </div>
    );
}

export default ChatMessage;