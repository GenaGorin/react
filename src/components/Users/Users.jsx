import React from 'react';
import gorinGena from '../../assets/img/gorin.jpg';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import {userAPI} from '../../api/api';

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let index = 1; index <= pageCount; index++) {
        pages.push(index);

    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? s.selectedPage : 'dick'}>{page}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id} >
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
            </div>)}
        </div>
    );
}

export default Users;