import React from 'react';
import s from './Users.module.css';


const Users = (props) => {
        if (props.users.length === 0) {
                props.setUsers(
                        [
                                { id: 1, followed: false, fullName: 'Gena', status: 'How create best app ?', location : {country : 'Belrus', city: 'Minsk'}, photo_url: 'https://yt3.ggpht.com/a/AGF-l78u6JSQLQr-8GxgyzUrpucMlL5q-98zMDUpow=s900-mo-c-c0xffffffff-rj-k-no',},
                                { id: 2, followed: true, fullName: 'Valer', status: 'I don\'t know but Mathew will create it,', location : {country : 'Belrus', city: 'Minsk'}, photo_url: 'https://avatars.mds.yandex.net/get-pdb/214107/29dc6981-6fc4-4933-a3b2-a8e4bcabfee1/s1200',},
                                { id: 3, followed: true, fullName: 'Mathew', status: 'Yes i do, my dps tracking app will be best', location : {country : 'Russia', city: 'Saratov'}, photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg',},
                        ],
                );       
        }

    return (
    <div>{props.users.map(user => <div key = {user.id} >
            <span>
                    <img src={user.photo_url} className = {s.image} alt=""/>
                    {user.followed 
                    ? <button onClick = { () => {props.unfollow(user.id)}}>unfollow</button>
                    : <button onClick = { () => {props.follow(user.id)}}>follow</button>}
            </span>
            <span>
                <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                </span>
                <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                </span>
            </span>
    </div>)}</div>
    );
}

export default Users;