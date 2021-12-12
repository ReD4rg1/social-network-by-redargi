import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Messages from "./Messages/Messages";
import avatar from "../../assets/img/Anos.jpg";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(
        dialog => <DialogItem id={dialog.id}
                              name={dialog.name}
                              message={dialog.message}
                              key={dialog.id}
        />
    );

    let messagesElements = props.messagesData.map(
        message => <Messages id={message.id}
                             name={message.name}
                             message={message.message}
                             key={message.id}
        />
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {

        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <div className={styles.dialogsTitle}>
                    Dialogs
                </div>
                <div className={styles.dialogItems}>
                    {dialogsElements}
                </div>
            </div>
            <hr/>
            <div className={styles.messages}>
                <div className={styles.messagesUser}>
                    <div className={styles.messagesUserName}>
                        Eldarbek
                        {/*{`${props.state.dialogsData[0].name}`}*/}
                    </div>
                    <div className={styles.messagesUserImage}>
                        <img src={avatar} alt='#'/>
                    </div>
                </div>
                <hr/>
                <div className={styles.messageItems}>
                    {messagesElements}
                </div>
                <div className={styles.messageSend}>
                    <textarea onChange={onMessageChange} ref={newMessageElement} rows={1}
                              value={props.newMessageText}/>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs