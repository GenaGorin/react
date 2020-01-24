import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FromsControls/FormControls';
import s from './ProfileInfo.module.css';
import styles from '../../common/FromsControls/FormControls.module.css';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>Edit mode</h1>
            <Field type="text" placeholder='Full name' name='fullName' component={Input} />
            <p>About me : <Field type="text" placeholder='About me' name='aboutMe' component={Textarea} /></p>
            <p>Find job ? <Field type="Checkbox" name='lookingForAJob' component={'input'} /></p>
            <p>Work description : <Field type="text" placeholder='Work description' name='lookingForAJobDescription' component={Textarea} /></p>
            <p><b>Contacts: </b> {Object.keys(props.initialValues.contacts).map(key => {
                return (
                    <div key = {key} className={s.singleContact}>
                        <b>{key} : <Field type="text" placeholder={key} name={'contacts.'+key} component={Input} /></b>
                    </div>
                )
            })}</p>
            {props.error ?
            <div className={styles.formSummaryError} >
                {props.error}
            </div> :
            <div></div>
            }
            <button>Save</button>
        </form>
    );
}


const ProfileDataReduxForm = reduxForm({
    form: 'profileData' // a unique identifier for this form
})(ProfileDataForm);

export default ProfileDataReduxForm;