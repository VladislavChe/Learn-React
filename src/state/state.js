import { rerendeEntireTree } from '../render';

let state = {
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
      { id: 6, name: 'Vlera' },
    ],
    messages: [
      { id: 1, message: 'HI' },
      { id: 2, message: 'how is your react?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' },
    ],
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 17,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerendeEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerendeEntireTree(state);
};

export default state;
