import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  getUsers,
  setCurrentPage,
  setFollowingProgress,
  unfollow,
} from '../../redux/users-reducer';
import Preloader from '../common/preloader/Plreloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
    totalUsersCount: state.usersPage.totalUsersCount,
    users: state.usersPage.users,
  };
};

export default withAuthRedirect(
  connect(mapStateToProps, {
    setFollowingProgress,
    setCurrentPage,
    getUsers,
    follow,
    unfollow,
  }),
  UsersContainer,
);
