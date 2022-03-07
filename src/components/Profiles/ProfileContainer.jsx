import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
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

//Connect
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
