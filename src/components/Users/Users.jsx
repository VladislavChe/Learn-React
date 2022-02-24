import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/img/user.png';
import s from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    let puck = {
      id: i,
      num: i,
    };
    pages.push(puck);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p.id}
            className={`${s.pageNumber} ${props.currentPage === p.num && s.selectedPage}`}
            onClick={() => {
              props.onPageChanged(p.num);
            }}>
            {p.num}
          </span>
        ))}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  className={s.usersPhoto}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.setFollowingProgress(true, u.id);
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '8b76209c-028f-4970-a9a4-8c998ee11b4f',
                        },
                      })
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                        props.setFollowingProgress(false, u.id);
                      });
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.setFollowingProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '8b76209c-028f-4970-a9a4-8c998ee11b4f',
                          },
                        },
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                        props.setFollowingProgress(false, u.id);
                      });
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
