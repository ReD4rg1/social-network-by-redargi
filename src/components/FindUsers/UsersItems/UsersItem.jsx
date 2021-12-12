import React from "react";
import styles from './UsersItem.module.css'
import avatar from '../../../assets/img/Anos.jpg'
import {NavLink} from "react-router-dom";

const UsersItem = (props) => {

    let followTo = () => {
        props.follow(props.id, props.followedStatus);
    }

    let followedStatus = 'Follow'
    if (props.followedStatus) {
        followedStatus = 'Unfollow'
    }

    return (
        <div className={styles.container}>
            <div className={styles.following}>
                <img src={props.photo != null ? props.photo : avatar} alt='#'/>
                <button disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={followTo}>{followedStatus}
                </button>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>
                    <NavLink to={'/profile/' + props.id}>
                        {props.name}
                    </NavLink>
                </div>
                <div className={styles.status}>
                    {props.status}
                </div>
            </div>
            <div className={styles.location}>
                <div className={styles.country}>
                    {/*props.location.country*/}
                </div>
                <div className={styles.city}>
                    {/*props.location.city*/}
                </div>
            </div>
        </div>
    )
}

export default UsersItem