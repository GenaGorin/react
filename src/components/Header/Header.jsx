import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";



const Header = (props) => {
    let logout = () => {
        props.logout();
    }
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} <div onClick={logout}>logout</div></div> : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}

export default Header;