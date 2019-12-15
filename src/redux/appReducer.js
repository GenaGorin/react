import { setMe, setMeThunk } from "./AuthReducer";

const SUCCESS_INITIALIZED = 'SUCCESS_INITIALIZED';

let initialState = {
    initialaized: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUCCESS_INITIALIZED:
            return {
                ...state,
                initialaized: true,
            };
        default:
            return state;
    }
}

export const  initialaizedSuccess = () => {
    return {
        type: SUCCESS_INITIALIZED,
    }
}

export const initializedAppThunk = () => {
    return (dispatch) => {
        let promiseSetMe = dispatch(setMeThunk());
        Promise.all([promiseSetMe]).then( response => {
            dispatch(initialaizedSuccess());
        });
    }
}

export default appReducer;