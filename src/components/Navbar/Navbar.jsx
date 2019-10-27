import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import Friend from './Friend/Friend';

const Navbar = (props) => {
    let componentsFriends = props.state.friends.map((el) => {
        return <Friend id={el.id} name={el.name} photo_url={el.photo_url} />;
    });
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activepage} >Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activepage}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/News" activeClassName={s.activepage}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.activepage}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.activepage}>Setting</NavLink>
        </div>
        <h4>Friends</h4>
        <div className={s.all_friends_wrap}>
            {componentsFriends}
        </div>
    </nav>
}

export default Navbar;