import React from "react";
import styles from './Post.module.css'
import avatar from '../../../../assets/img/avatar.jpg'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.userInfo}>
                <img src={avatar} alt="#"/>
                <div className={styles.userName}>
                    {/*{props.name}*/}D4Rg1
                </div>
            </div>
            <div className={styles.postContent}>
                <div className={styles.postText}>
                    {props.message}
                </div>
                <div className={styles.likes}>
                    <div className={styles.likePost}>Like It</div>
                    <div className={styles.likesCounts}>
                        {props.likesCount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post