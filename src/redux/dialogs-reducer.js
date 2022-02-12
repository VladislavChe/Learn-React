const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'HI' },
    { id: 2, message: 'how is your react?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],
  newMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      return {
        ...state,
        newMessage: action.newText,
      };
      // let stateCopy = { ...state };
      // stateCopy.newMessage = action.newText;
      // return stateCopy;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: state.newMessage }],
        newMessage: '',
      };

      //   let newMessage = {
      //     id: 6,
      //     message: state.newMessage,
      //   };
      //   let stateCopy = {
      //     ...state,
      //     messages: [...state.messages],
      //   };
      //   stateCopy.messages.push(newMessage);
      //   stateCopy.newMessage = '';
      //   return stateCopy;
      //
    }
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
