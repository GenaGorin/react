import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import gorinGena from '../../assets/img/gorin.jpg';


const Users = (props) => {

        let getUsers = () => {
                if (props.users.length === 0) {
                        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                                props.setUsers(response.data.items);
                        });             
                }
        }
        

    return (
    <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(user => <div key = {user.id} >
            <span>
                    <img src={user.photos.small ?user.photos.small : gorinGena} className = {s.image} alt=""/>
                    {user.followed 
                    ? <button onClick = { () => {props.unfollow(user.id)}}>unfollow</button>
                    : <button onClick = { () => {props.follow(user.id)}}>follow</button>}
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
    </div>)}</div>
    );
}

export default Users;