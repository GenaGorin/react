import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.friend_wrap}>
                <img src={props.photo_url} alt="test" id={props.id}/>
                <div  className={s.name}>{props.name}</div>
            </div>
        </div>
    )
}

export default Friend;