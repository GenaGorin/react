import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfile, getProfileThunk, getUserStatus, updateProfileStatus, sendProfileDataThunk } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRtedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = this.props.myID;
        if (!userId) {
          this.props.history.push('/login');
        }
    }
    //alert(this.props.myID);
    this.props.getUserStatus(userId);
    this.props.getProfileThunk(userId);
  }

  render() {
    return (
      <Profile {... this.props} profile={this.props.profile} updateProfileStatus = {this.props.updateProfileStatus} sendProfileDataThunk = {this.props.sendProfileDataThunk} />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myID: state.auth.id,
  status: state.profile.status,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getProfileThunk, getUserStatus, updateProfileStatus, sendProfileDataThunk }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);