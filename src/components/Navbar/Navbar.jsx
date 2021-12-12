import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.navContent}>
                <div className={styles.item}>
                    <NavLink to="/profile" className={({ isActive }) =>  isActive ? `${styles.active}` : ""}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs" className={({ isActive }) =>  isActive ? `${styles.active}` : ""}>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/friends" className={({ isActive }) =>  isActive ? `${styles.active}` : ""}>Friends</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/find_friends" className={({ isActive }) =>  isActive ? `${styles.active}` : ""}>Find Friends</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news" className={({ isActive }) =>  isActive ? `${styles.active}` : ""}>News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/music" className={({ isActive }) =>  isActive ? `${styles.active}` : ""}>Music</NavLink>
                </div>
            </div>
            <div className={styles.navSettings}>
                <div className={styles.item}>
                    <a href="/#">Settings</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar