import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-text';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    newPostText: 'Post text',
    status: '',
    posts: [
        { id: 1, post: 'Hello i\'m Gena Gorin!', photo_url: 'https://yt3.ggpht.com/a/AGF-l78u6JSQLQr-8GxgyzUrpucMlL5q-98zMDUpow=s900-mo-c-c0xffffffff-rj-k-no', likes: 228, },
        { id: 2, post: 'OMG i\'m too', photo_url: 'https://avatars.mds.yandex.net/get-pdb/214107/29dc6981-6fc4-4933-a3b2-a8e4bcabfee1/s1200', likes: 1488 },
        { id: 3, post: 'And me', photo_url: 'https://pbs.twimg.com/media/DR6m8pSW0AAEse1.jpg', likes: 190 },
    ],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: action.text,
                photo_url: 'https://pbs.twimg.com/media/C8ts2VHXkAATPOw.jpg',
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case UPDATE_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(function(post) {
                    return post.id != action.id;
                  })
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text: text,
    }
}

export const deletePostActionCreator = (id) => {
    return {
        type: DELETE_POST,
        id: id,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    }
}

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
          });
    }
}

const setProfileStatus = (status) => {
    return {
        type: UPDATE_PROFILE_STATUS,
        status: status,
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data));
        });
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        });
    }
}

export default profileReducer;