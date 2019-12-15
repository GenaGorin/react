import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import {logoutThunk} from '../../redux/AuthReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class HeaderContainer extends React.Component {
    render() {
        return <Header login = {this.props.login} isAuth ={this.props.isAuth} logout = {this.props.logoutThunk} />
    }
}
 let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
 }

export default compose(
    connect(mapStateToProps, {logoutThunk}),
    withRouter
)(HeaderContainer);