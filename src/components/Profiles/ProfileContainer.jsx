import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

//HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//Connect
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfile })(WithUrlDataContainerComponent);
