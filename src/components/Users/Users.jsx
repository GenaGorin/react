import React from 'react';
import gorinGena from '../../assets/img/gorin.jpg';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '6fc10eda-6101-457f-9b3f-78fb0d422a3d',
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                }
                            });

                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '6fc10eda-6101-457f-9b3f-78fb0d422a3d',
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(user.id);
                                }
                            });
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