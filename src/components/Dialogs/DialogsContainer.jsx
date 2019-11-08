import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {

    //let componentsMessage = props.state.messages.map(message => <Message id={message.id} message={message.message} />);
    return (
        <StoreContext.Consumer >
            { store => {
                    let state = store.getState();

                    let sendMessage = () => {
                        let action = addMessageActionCreator();
                        store.dispatch(action);
                    }

                    let onPostChange = (body) => {
                        let action = updateMessageBodyCreator(body);
                        store.dispatch(action);
                    }
                    return <Dialogs state={state.dialogs} postChange={onPostChange} sendMessage={sendMessage} />
                }
            }
        </StoreContext.Consumer >
    )
}

export default DialogsContainer;