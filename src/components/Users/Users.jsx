import React from 'react';
import gorinGena from '../../assets/img/gorin.jpg';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import {userAPI} from '../../api/api';
import User from './User';

let Users = (props) => {
    return (
        <div>
            {props.users.map(user => <div key={user.id} >
                <User user = {user} followLoad = {props.followLoad} followThunk = {props.followThunk} unfollowThunk = {props.unfollowThunk}/>
            </div>)}
        </div>
    );
}

export default Users;