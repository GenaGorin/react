import React from 'react';
import Header from './Header';
import {authMe} from '../../api/api';
import { connect } from "react-redux";
import {setMe} from '../../redux/AuthReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe().then(response => {
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