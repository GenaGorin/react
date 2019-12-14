import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Textarea} from '../common/FromsControls/FormControls';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator, test} from '../../utils/validators/validators';


const DialogsForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field type="text" placeholder='text' name='newMessageText' component={Textarea} validate = {[required, maxLength10]}/>
        <button  >Send</button>
    </form>);
}

const DialogReduxForm = reduxForm({
    form: 'dialogs' // a unique identifier for this form
})(DialogsForm);


const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
    let componentsNames = props.state.dialogs.map((el) => {
        return <DialogItem id={el.id} name={el.name} />;
    });

    let componentsMessage = props.state.messages.map(message => <Message id={message.id} message={message.message} />);

    const addNewMessage = (formData) => {
        console.log(formData);
        props.sendMessage(formData.newMessageText);
    }

    return (
        <div class={s.test}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {componentsNames}
                </div>
                <div className={s.messages}>
                    {componentsMessage}
                    <DialogReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}



export default Dialogs;