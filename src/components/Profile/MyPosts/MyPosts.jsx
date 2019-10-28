import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';


const MyPosts = (props) => {
  let componentsPost = props.posts.map( post => <Post message = {post.post} id = {post.id} url_image = {post.photo_url} likesCount ={post.likes} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
   // let action = {
   //   type: 'ADD-POST',
   // };
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //let action = {
     // type: 'UPDATE-NEW-POST-TEXT',
     // newText: text,
   // };
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.mypostMainWrapp}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange= {onPostChange} ref ={newPostElement} value ={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost} >Add</button>
        </div>
      </div>
      <div className = {s.postWrapper}>
        {componentsPost}
      </div>
    </div>
  );
}

export default MyPosts;