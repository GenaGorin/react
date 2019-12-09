import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import {setMeThunk} from '../../redux/AuthReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setMeThunk();
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

export default connect(mapStateToProps, {setMeThunk})(HeaderContainer);