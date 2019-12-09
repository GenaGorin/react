import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfile, getProfileThunk } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRtedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 2;
    }
    //alert(this.props.myID);
    this.props.getProfileThunk(userId);
  }

  render() {
    return (
      <Profile {... this.props} profile={this.props.profile} />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myID: state.auth.id,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getProfileThunk }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);