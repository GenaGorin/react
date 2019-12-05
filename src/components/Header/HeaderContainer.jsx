import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from "react-redux";
import {setMe} from '../../redux/AuthReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setMe(id, email, login, true);
            }
        });
    }

    render() {
        return <Header login = {this.props.login} isAuth ={this.props.isAuth} />
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

export default connect(mapStateToProps, {setMe})(HeaderContainer);