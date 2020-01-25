import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-text';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO';

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
        case UPDATE_USER_PROFILE: {
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
                posts: state.posts.filter(function (post) {
                    return post.id != action.id;
                })
            }
        }
        case UPDATE_PROFILE_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                }
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

export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

const updateProfileData = (formData) => {
    return {
        type: UPDATE_USER_PROFILE,
        profile: formData,
    }
}

const savePhotoSuccess = (photos) => {
    return {
        type: UPDATE_PROFILE_PHOTO,
        photos: photos,
    }
}

export const sendProfileDataThunk = (formData) => async (dispatch) => {
    let response = await profileAPI.saveProfile(formData);
    if (response.data.resultCode === 0) {
        dispatch(updateProfileData(formData));
    } else {
        dispatch(stopSubmit('profileData', { _error: response.data.messages[0], }));
        return Promise.reject(response.data.messages[0]);
    }
}

const setProfileStatus = (status) => {
    return {
        type: UPDATE_PROFILE_STATUS,
        status: status,
    }
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setProfileStatus(response.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}

export const saveFileThunk = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;