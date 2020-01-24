import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {componentOpenWithSound} from '../../hoc/withAuthRtedirect';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo sendProfileDataThunk = {props.sendProfileDataThunk} profile = {props.profile} status = {props.status} updateProfileStatus = {props.updateProfileStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default componentOpenWithSound(Profile);