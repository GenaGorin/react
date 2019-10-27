import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let componentsPost = props.posts.map( post => <Post message = {post.post} id = {post.id} url_image = {post.photo_url} likesCount ={post.likes} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
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
          <textarea onChange= {onPostChange} ref ={newPostElement} value ={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost} >add post</button>
        </div>
      </div>
      <div className = {s.postWrapper}>
        {componentsPost}
      </div>
    </div>
  );
}

export default MyPosts;