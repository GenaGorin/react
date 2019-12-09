import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageBodyCreator } from '../../redux/dialogsReducer';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRtedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        state: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        postChange: (body) => {
            let action = updateMessageBodyCreator(body);
            dispatch(action);
        },
        sendMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
    }
}

let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


export default DialogsContainer;