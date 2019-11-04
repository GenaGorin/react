import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageBodyCreator} from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    let onPostChange =(body) =>{
         let action = updateMessageBodyCreator(body);
         props.store.dispatch(action);
    }
    //let componentsMessage = props.state.messages.map(message => <Message id={message.id} message={message.message} />);
    return (<Dialogs state= {state.dialogs} postChange ={onPostChange} sendMessage = {sendMessage} />)
}

export default DialogsContainer;