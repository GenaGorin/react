import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile = {props.profile} status = {props.status} updateProfileStatus = {props.updateProfileStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;