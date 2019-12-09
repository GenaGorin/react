import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfile, getProfileThunk } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRtedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger;
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

let AuthRedirectCompoent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profile.profile,
  myID: state.auth.id,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectCompoent);

export default connect(mapStateToProps, { setUserProfile, getProfileThunk })(WithUrlDataContainerComponent);