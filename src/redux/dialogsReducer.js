const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Mathew228' },
        { id: 2, name: 'vAle1488r' },
        { id: 3, name: 'Leha' },
        { id: 4, name: 'Chesak' },
        { id: 5, name: 'Gaylord' },
    ],
    messages: [
        { id: 1, message: 'Hello world' },
        { id: 2, message: 'Valer pidaras' },
        { id: 3, message: 'budesh suck?' },
        { id: 4, message: 'omg' },
        { id: 5, message: 'die' },
    ],
    newMessageBody: "New",
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:{
            let copyState = {...state};
            let body = state.newMessageBody;
            copyState.newMessageBody = '';
            let newMessage = {
                id : 6,
                message: body,
            }
            let newDialog = {
                id: 6,
                name: 'Me',
            }
            copyState.dialogs = [...state.dialogs];
            copyState.messages = [...state.messages];
            copyState.dialogs.push(newDialog);
            copyState.messages.push(newMessage);
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            let copyState = {...state}
            copyState.newMessageBody = action.body;
            return copyState;
        }
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