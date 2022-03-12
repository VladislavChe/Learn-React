import { profileAPI, usersAPI } from './../API/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'HI, how are you?', likeCount: 12 },
    { id: 2, message: "It's my 1 post", likeCount: 11 },
    { id: 3, message: 'It is my 2 post', likeCount: 13 },
    { id: 4, message: 'It is my 3 post', likeCount: 15 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.newPost, likeCount: 17 }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

//Action Creators
export const addPostActionCreator = (newPost) => ({
  type: ADD_POST,
  newPost,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

//Thunk creators
export const getProfile = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 2;
    }
    usersAPI.getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};
export default profileReducer;
