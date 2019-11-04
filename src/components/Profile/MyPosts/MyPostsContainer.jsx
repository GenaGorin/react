import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';


const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }
  return (<MyPosts updateNewPostText = {onPostChange} addPost={addPost} posts={state.profile.posts} defaultValue = {state.profile.newPostText} />);
}

export default MyPostsContainer;