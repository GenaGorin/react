import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_ME = 'auth/SET_ME';
const SHOW_CAPTCHA_IMAGE = 'auth/SHOW_CAPTCHA_IMAGE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ME:
            return {
                ...state,
                ...action.data
            };
        case SHOW_CAPTCHA_IMAGE:
            return {
                ...state,
                captchaUrl: action.url,
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

const showCaptchaImage = (url) => {
    return {
        type: SHOW_CAPTCHA_IMAGE,
        url: url,
    }
}

const setCaptchaImage = () => async (dispatch) => {
    let response = await authAPI.getCaptcha();
    let captchaUrl = response.data.url;
    dispatch(showCaptchaImage(captchaUrl));
}

export const loginThunk = (formData) => async (dispatch) => {
    let response = await authAPI.login(formData);
    if (response.data.resultCode === 0) {
        dispatch(setMeThunk());
    } else if (response.data.messages[0] == 'Incorrect anti-bot symbols') {
        dispatch(setCaptchaImage());
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