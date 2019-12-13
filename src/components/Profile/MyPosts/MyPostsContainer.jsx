import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profileReducer';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    defaultValue: state.profile.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: (text) => {
          dispatch(addPostActionCreator(text));
      },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;