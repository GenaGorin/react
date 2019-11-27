import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';


const MyPosts = (props) => {
  let componentsPost = props.posts.map( post => <Post message = {post.post} id = {post.id} key = {post.id} url_image = {post.photo_url} likesCount ={post.likes} /> );

  let newPostElement = React.createRef();

  let onAddPost = () => {
   // let action = {
   //   type: 'ADD-POST',
   // };
    //props.dispatch(addPostActionCreator());
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.mypostMainWrapp}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange= {onPostChange} ref ={newPostElement} value ={props.defaultValue} />
        </div>
        <div>
          <button onClick={onAddPost} >Add</button>
        </div>
      </div>
      <div className = {s.postWrapper}>
        {componentsPost}
      </div>
    </div>
  );
}

export default MyPosts;