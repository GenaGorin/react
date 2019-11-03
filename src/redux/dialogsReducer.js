const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newMessage = {
                id : 6,
                message: body,
            }
            let newDialog = {
                id: 6,
                name: 'Me',
            }
            state.dialogs.push(newDialog);
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE,
      }
}
export const updateMessageBodyCreator = (body) => {
  return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body,
    }
}

export default dialogsReducer;