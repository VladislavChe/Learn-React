import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChage = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <div>
            <MyPosts
              updateNewPostText={onPostChage}
              addPost={addPost}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}
            />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;
