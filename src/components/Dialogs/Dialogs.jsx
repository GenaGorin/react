import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageBodyCreator} from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    let componentsNames = props.state.dialogs.map((el) => {
        return <DialogItem id={el.id} name={el.name} />;
    });

    let newMessageelement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onPostChange =(e) =>{
         let body = e.target.value;
         props.postChange(body);
    }
    let componentsMessage = props.state.messages.map(message => <Message id={message.id} message={message.message} />);
    return (
        <div class={s.test}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {componentsNames}
                </div>
                <div className={s.messages}>
                    {componentsMessage}
                    <textarea onChange= {onPostChange} value ={props.state.newMessageBody} ></textarea>
                    <button onClick={onSendMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;