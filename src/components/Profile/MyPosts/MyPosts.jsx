import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {
  let componentsPost = props.posts.map(post => <Post message={post.post} id={post.id} key={post.id} url_image={post.photo_url} likesCount={post.likes} />);

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

  let createNewWallPost = (formData) => {
    console.log(formData);
    //props.updateNewPostText(formData.wallPostText);
    props.addPost(formData.wallPostText);
  }

  return (
    <div className={s.mypostMainWrapp}>
      <h3>My posts</h3>
      <div>
        <WallPostFormRedux onSubmit={createNewWallPost} />
      </div>
      <div className={s.postWrapper}>
        {componentsPost}
      </div>
    </div>
  );
}

const WallPostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field type="text" placeholder='text' name='wallPostText' component="textarea" />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

const WallPostFormRedux = reduxForm({form: 'addWallPost'})(WallPostForm);

export default MyPosts;