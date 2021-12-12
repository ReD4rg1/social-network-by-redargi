import React from "react";
import styles from './DialogItem.module.css'
import avatar from '../../../assets/img/Anos.jpg'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? `${styles.active}` : ""}>
            <div className={styles.container}>
                <img src={avatar} alt='#'/>
                <div className={styles.item}>
                    <div className={styles.itemName}>
                        {props.name}
                    </div>
                    <div className={styles.message}>
                        <div className={styles.messageItem}>
                            {props.message}
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogItem