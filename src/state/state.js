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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 17,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGE') {
      this._state.dialogsPage.newMessage = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
