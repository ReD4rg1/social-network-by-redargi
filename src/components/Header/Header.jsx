import React from "react";
import logo from '../../assets/img/logo.svg'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className={styles.headerTitle}>
                <img src={logo} alt="#"/>
                <div className={styles.title}>Social Network by Musenov Kirill</div>
            </div>
            <div className={styles.headerLogin}>
                {!props.isAuth
                    ? <NavLink to={'/login'}>Login</NavLink>
                    : <div className={styles.logOut}>
                        {props.name}
                        <button onClick={props.logout}>Log Out</button>
                    </div>}
                {props.userid}
            </div>
        </header>
    )
}

export default Header