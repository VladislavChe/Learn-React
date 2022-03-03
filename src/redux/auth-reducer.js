import { usersAPI } from '../API/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

//Action creators
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

//Thunk creators
export const authorized = () => {
  return (dispatch) => {
    usersAPI.setUserData().then((response) => {
      if (response.data.resultCode == 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
