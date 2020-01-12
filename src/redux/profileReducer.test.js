import profileReducer, {addPostActionCreator, deletePostActionCreator} from './profileReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

let initialState = {
    newPostText: 'Post text',
    status: '',
    posts: [
        { id: 1, post: 'Hello i\'m Gena Gorin!', photo_url: 'https://yt3.ggpht.com/a/AGF-l78u6JSQLQr-8GxgyzUrpucMlL5q-98zMDUpow=s900-mo-c-c0xffffffff-rj-k-no', likes: 228, },
        { id: 2, post: 'OMG i\'m too', photo_url: 'https://avatars.mds.yandex.net/get-pdb/214107/29dc6981-6fc4-4933-a3b2-a8e4bcabfee1/s1200', likes: 1488 },
        { id: 3, post: 'And me', photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg', likes: 190 },
        { id: 4, post: 'Hello dicksuckers', photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg', likes: 228 },
    ],
};

it('Length of posts should be 5', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra');
    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.posts.length).toBe(5);
});

it('Last post should be it-kamasutra', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra');
    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.posts[4].post).toBe('it-kamasutra');
});

it('Posts length should be decremented after deleted', () => {
    //1. test data
    let action = deletePostActionCreator(1);
    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

it('Posts length should not be changed if we try delete incorrect id ', () => {
    //1. test data
    let action = deletePostActionCreator(21);
    //2. action
    let newState = profileReducer(initialState, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});