const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'HI, how are you?', likeCount: 12 },
        { id: 2, message: "It's my first post", likeCount: 11 },
        { id: 2, message: 'Yo', likeCount: 13 },
        { id: 2, message: 'Blala', likeCount: 15 },
      ],
      newPostText: '',
    },

    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 17,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.dialogsPage.newMessage = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE,
  newText: text,
});

export default store;
window.store = store;
