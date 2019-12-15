import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    initialized: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store =store;

export default store;