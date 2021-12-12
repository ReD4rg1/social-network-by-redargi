import React from "react";
import styles from './FindUsers.module.css'
import UsersItem from "./UsersItems/UsersItem";
import Paginator from "./Paginator";

let FindUsers = (props) => {

    let onSearchChange = () => {
        let text = textareaRef.current.value;
        props.updateNewFindUsersText(text);
    }

    let textareaRef = React.createRef();

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <textarea onChange={onSearchChange} ref={textareaRef} rows={1}
                          value={props.newFindUsersText}/>
                <button>Search</button>
            </div>
            <Paginator {...props}/>
            <div className={styles.users}>
                {props.users.map(
                    user => <UsersItem id={user.id}
                                       name={user.name}
                                       status={user.status}
                                       location={user.location}
                                       photo={user.photos.small}
                                       key={user.id}
                                       followedStatus={user.followed}
                                       follow={props.follow}
                                       followingInProgress={props.followingInProgress}
                    />
                )}
            </div>
            <Paginator {...props}/>
        </div>
    )
}

export default FindUsers