import React from "react";
import styles from './Messages.module.css'
import avatar from "../../../assets/img/avatar.jpg";
import avatarAnos from "../../../assets/img/Anos.jpg";

const Messages = (props) => {

    let image = avatar;

    if (props.name === 'Eldar') {
        image = avatarAnos
    }

    return (
        <div className={styles.container}>
            <img src={image} alt='#'/>
            <div className={styles.item}>
                <div className={styles.userName}>
                    {props.name}
                </div>
                <div className={styles.userMessage}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Messages