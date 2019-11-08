import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {
  
  return (
    <StoreContext.Consumer >
      { store =>{
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      }

      let onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
      }
      return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profile.posts} defaultValue={state.profile.newPostText} />)
      }
    }
    </ StoreContext.Consumer>
  );
}

export default MyPostsContainer;