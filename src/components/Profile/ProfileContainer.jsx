import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfile, getProfileThunk, getUserStatus, updateProfileStatus, sendProfileDataThunk, saveFileThunk } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRtedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  getUserProfileId() {
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

  componentDidMount() {
    console.log('did mount');
    this.getUserProfileId();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      console.log('did update');
      this.getUserProfileId();
    }
  }

  render() {
    return (
      <Profile {... this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        updateProfileStatus={this.props.updateProfileStatus}
        sendProfileDataThunk={this.props.sendProfileDataThunk}
        saveFileThunk = {this.props.saveFileThunk} />
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
  connect(mapStateToProps, { setUserProfile, getProfileThunk, getUserStatus, updateProfileStatus, sendProfileDataThunk, saveFileThunk }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);