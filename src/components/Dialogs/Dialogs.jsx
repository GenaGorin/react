import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator} from '../../redux/state';

const Dialogs = (props) => {
    let componentsNames = props.state.dialogs.map((el) => {
        return <DialogItem id={el.id} name={el.name} />;
    });

    let newMessageelement = React.createRef();

    let sendMessage = () => {
        let text = newMessageelement.current.value;
        let action = addMessageActionCreator(text);
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
                    <textarea name="" id="" cols="20" rows="5" ref= {newMessageelement}></textarea>
                    <button onClick={sendMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;