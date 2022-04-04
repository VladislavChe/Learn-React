import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  follow,
  requestUsers,
  setCurrentPage,
  setFollowingProgress,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Plreloader";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import Users from "./Users";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber);
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

// let mapStateToProps = (state) => {
//   return {
//     pageSize: state.usersPage.pageSize,
//     currentPage: state.usersPage.currentPage,
//     followingInProgress: state.usersPage.followingInProgress,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     users: state.usersPage.users,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setFollowingProgress,
    setCurrentPage,
    requestUsers,
    follow,
    unfollow,
  })
)(UsersContainer);
