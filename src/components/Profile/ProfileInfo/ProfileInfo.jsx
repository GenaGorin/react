import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="test"/>
        < ProfileStatus status = {props.status} updateProfileStatus = {props.updateProfileStatus}/>
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
        <p>{props.profile.lookingForAJob ? 'Ищу работу': 'Не ищу работу я кайфарик'}</p>
        <p>{props.profile.lookingForAJobDescription}</p>
    </div>
    </div>
  )
}

export default ProfileInfo;