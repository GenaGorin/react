import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import {loginThunk} from '../../redux/AuthReducer';
import {Input} from '../common/FromsControls/FormControls';
import {required, maxLengthCreator, test} from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
import styles from '../common/FromsControls/FormControls.module.css';


const maxLength25 = maxLengthCreator(25);

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field type="text" placeholder='email' name='email' component={Input} validate = {[required, maxLength25]}/>
            </div>
            <div>
                <Field type="password" placeholder='password' name='password' component={Input} validate = {[required, maxLength25]} />
            </div>
            <div>
                <Field type="checkbox" name='rememberMe' component="input" />rememberMe
            </div>
            {props.error ?
            <div className={styles.formSummaryError} >
                {props.error}
            </div> :
            <div></div>
            }
            {props.captchaUrl ? 
            <div>
            <img src={props.captchaUrl} alt="captcha"/> 
            <Field type="text" placeholder='Captcha' name='captcha' component={Input}/>
            </div>
            : ''}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.loginThunk(formData);
    }

    if (props.isAuth) {
      return <Redirect to = '/profile'/>;  
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom captchaUrl = {props.captchaUrl} onSubmit = {onSubmit}/>
    </div>
}

const LoginReduxFrom = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm)

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps,{loginThunk})(Login);