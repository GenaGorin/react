import React from 'react';
import gorinGena from '../../assets/img/gorin.jpg';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";

let User = ({user, ...props}) => {
    //let user = props.user;
    return (    <div>
                <span>
                    <NavLink to={'profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : gorinGena} className={s.image} alt="" />
                    </NavLink>
                    {user.followed
                        ? <button disabled ={props.followLoad.some(id => id === user.id? true: false)} onClick={() => {
                            props.unfollowThunk(user.id)
                        }}>unfollow</button>
                        : <button disabled ={props.followLoad.some(id => id === user.id? true: false)} onClick={() => {
                            props.followThunk(user.id);
                        }}>follow</button>}
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{}</div>
                        <div>{}</div>
                    </span>
                </span>
                </ div>
    );
}

export default User;