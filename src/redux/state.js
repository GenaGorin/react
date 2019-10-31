const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-text';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
let store = {
    _state : {
        profile: {
            newPostText: 'New POST text',
            posts: [
                { id: 1, post: 'Hello i\'m Gena Gorin!', photo_url: 'https://yt3.ggpht.com/a/AGF-l78u6JSQLQr-8GxgyzUrpucMlL5q-98zMDUpow=s900-mo-c-c0xffffffff-rj-k-no', likes: 228, },
                { id: 2, post: 'OMG i\'m too', photo_url: 'https://avatars.mds.yandex.net/get-pdb/214107/29dc6981-6fc4-4933-a3b2-a8e4bcabfee1/s1200', likes: 1488 },
                { id: 3, post: 'And me', photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg', likes: 190 },
            ],
        },
        dialogs: {
            dialogs: [
                { id: 1, name: 'Mathew228' },
                { id: 2, name: 'vAle1488r' },
                { id: 3, name: 'Leha' },
                { id: 4, name: 'Chesak' },
                { id: 5, name: 'Gaylord' },
            ],
            messages: [
                { id: 1, message: 'Hello world' },
                { id: 2, message: 'Valer pidaras' },
                { id: 3, message: 'budesh suck?' },
                { id: 4, message: 'omg' },
                { id: 5, message: 'die' },
            ],
            newMessageBody: "New",
        },
        friends: {
            friends:[
                { id: 1, name: 'Gena', photo_url: 'https://yt3.ggpht.com/a/AGF-l78u6JSQLQr-8GxgyzUrpucMlL5q-98zMDUpow=s900-mo-c-c0xffffffff-rj-k-no',},
                { id: 2, name: 'Sanek', photo_url: 'https://avatars.mds.yandex.net/get-pdb/214107/29dc6981-6fc4-4933-a3b2-a8e4bcabfee1/s1200',},
                { id: 3, name: 'Daun', photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg',},
            ],
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('dick');
    },

    subscriber (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                post: this._state.profile.newPostText,
                photo_url: 'https://pbs.twimg.com/media/C8ts2VHXkAATPOw.jpg',
                likes: 0,
            };
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === ADD_NEW_MESSAGE) {
            let body = this._state.dialogs.newMessageBody;
            this._state.dialogs.newMessageBody = '';
            let newMessage = {
                id : 6,
                message: body,
            }
            let newDialog = {
                id: 6,
                name: 'Me',
            }
            this._state.dialogs.dialogs.push(newDialog);
            this._state.dialogs.messages.push(newMessage);
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogs.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
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

export const addMessageActionCreator = () => {
  return {
      type: ADD_NEW_MESSAGE,
    }
}
export const updateMessageBodyCreator = (body) => {
  return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body,
    }
}


export default store;
window.store = store;