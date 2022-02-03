const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessage,
      };
      state.messages.push(newMessage);
      state.newMessage = '';
      return state;

    case UPDATE_MESSAGE:
      state.newMessage = action.newText;
      return state;

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE,
  newText: text,
});

export default dialogsReducer;
