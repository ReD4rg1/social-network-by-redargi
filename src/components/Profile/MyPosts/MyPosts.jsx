import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData.map(
        post => <Post id={post.id}
                      name={post.name}
                      message={post.message}
                      likesCount={post.likesCount}
                      key={post.id}
        />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.postsTitle}>
                    My Posts
                </div>
                <div className={styles.postsSend}>
                    <textarea rows={1} onChange={updateNewPostText} ref={newPostElement} value={props.profilePage.newPostText}/>
                    <button onClick={addPost}>Send Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts