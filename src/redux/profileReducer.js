const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-text';

let initialState = {
    newPostText: 'New POST text',
    posts: [
        { id: 1, post: 'Hello i\'m Gena Gorin!', photo_url: 'https://yt3.ggpht.com/a/AGF-l78u6JSQLQr-8GxgyzUrpucMlL5q-98zMDUpow=s900-mo-c-c0xffffffff-rj-k-no', likes: 228, },
        { id: 2, post: 'OMG i\'m too', photo_url: 'https://avatars.mds.yandex.net/get-pdb/214107/29dc6981-6fc4-4933-a3b2-a8e4bcabfee1/s1200', likes: 1488 },
        { id: 3, post: 'And me', photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg', likes: 190 },
    ],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.newPostText,
                photo_url: 'https://pbs.twimg.com/media/C8ts2VHXkAATPOw.jpg',
                likes: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST,
    }
  }
  export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
      }
  }

export default profileReducer;