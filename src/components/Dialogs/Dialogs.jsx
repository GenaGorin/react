import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageBodyCreator} from '../../redux/state';

const Dialogs = (props) => {
    let componentsNames = props.state.dialogs.map((el) => {
        return <DialogItem id={el.id} name={el.name} />;
    });

    let newMessageelement = React.createRef();

    let sendMessage = () => {
        //let text = newMessageelement.current.value;
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let onPostChange =(e) =>{
         let body = e.target.value;
         let action = updateMessageBodyCreator(body);
         props.dispatch(action);
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
                    <button onClick={sendMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;