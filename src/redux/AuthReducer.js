import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_ME = 'auth/SET_ME';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ME:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export const setMe = (userId, email, login, isAuth) => {
    return {
        type: SET_ME,
        data: {
            id: userId,
            email: email,
            login: login,
            isAuth: isAuth,
        },
    }
}

export const setMeThunk = () => async (dispatch) => {
        let response = await authAPI.authMe();

        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            //console.log(response.data);
            dispatch(setMe(id, email, login, true));
        }
}

export const loginThunk = (formData) => async (dispatch) => {
        let response = await authAPI.login(formData);
            if (response.data.resultCode === 0) {
                //console.log(response.data);
                dispatch(setMeThunk());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', { _error: message, }));
            }
}

export const logoutThunk = () => async (dispatch) => {
        let response = await authAPI.logout();
            if (response.data.resultCode === 0) {
                dispatch(setMe(null, null, null, false));
            }
}


export default authReducer;