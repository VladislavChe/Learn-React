import React from 'react';
import userPhoto from '../../assets/img/user.png';
import s from './Users.module.css';

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
      <div className={s.pageNumber}>
        {pages.map((p) => (
          <span
            key={p.id}
            className={props.currentPage === p.num && s.selectedPage}
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
              <img
                className={s.usersPhoto}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="avatar"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
