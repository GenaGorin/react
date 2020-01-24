import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />
  }

  let goToEditMode = (bool) => {
    setEditMode(bool);
  }
  let saveProfileData = (formData) => {
    props.sendProfileDataThunk(formData).then(()=> {
      setEditMode(false);
    });
  }


  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="test" />
        < ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
        {editMode 
        ?< ProfileDataReduxForm initialValues = {props.profile} onSubmit={saveProfileData} />
        :<ProfileUserInfoBlock goToEditMode = {goToEditMode} profile = {props.profile} isOwner = {true} />}
      </div>
    </div>
  )
}

const ProfileUserInfoBlock = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <button onClick = {()=>{goToEditMode(true)}}>Edit</button>}
      <p>Full name: {profile.fullName}</p>
      <p>About me : {profile.aboutMe}</p>
      <p>Work status: {profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу я кайфарик'}</p>
      <p>About work : {profile.lookingForAJobDescription}</p>
      <p><b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
      })}</p>
    </div>
  );
}


const Contacts = ({ contactsTitle, contactsValue }) => {
  return <div className={s.singleContact}>
    <b>{contactsTitle}</b> : {contactsValue}
  </div>
}

export default ProfileInfo;