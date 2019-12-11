import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import {loginThunk} from '../../redux/AuthReducer';


const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field type="text" placeholder='email' name='email' component="input" />
            </div>
            <div>
                <Field type="password" placeholder='password' name='password' component="input" />
            </div>
            <div>
                <Field type="checkbox" name='rememberMe' component="input" />rememberMe
            </div>
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
    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit = {onSubmit}/>
    </div>
}

const LoginReduxFrom = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm)

let mapStateToProps = (state) => {
    return {
        //a: 228,
    }
}

export default connect(mapStateToProps,{loginThunk})(Login);