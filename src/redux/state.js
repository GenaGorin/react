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
            ]
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
    addPost() {
        let newPost = {
            id: 4,
            post: this._state.profile.newPostText,
            photo_url: 'https://pbs.twimg.com/media/C8ts2VHXkAATPOw.jpg',
            likes: 0,
        };
        this._state.profile.posts.push(newPost);
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText){
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },

}


export default store;
window.store = store;