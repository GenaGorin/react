import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return ( 
        <div className ={s.item}>
            <img src={props.url_image} alt="dick"/>
            {props.message}
            <div>
                <span>Like - {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;