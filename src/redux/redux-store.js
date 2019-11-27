import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
});

let store = createStore(reducers);

window.store =store;

export default store;