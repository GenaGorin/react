import { authAPI } from '../api/api';

const SET_ME = 'SET_ME';

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

export const setMeThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setMe(id, email, login, true));
            }
        });
    }
}

export const loginThunk = (formData) => {
    debugger;
    return (dispatch) => {
        authAPI.login(formData).then(response => {
            console.log(response);
        });
    }
}


export default authReducer;