const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Mathew' },
        { id: 2, name: 'Valeriy' },
        { id: 3, name: 'Alexey' },
        { id: 4, name: 'Artem' },
        { id: 5, name: 'Gaylord' },
    ],
    messages: [
        { id: 1, message: 'Hello world' },
        { id: 2, message: 'Valer pidaras' },
        { id: 3, message: 'budesh suck?' },
        { id: 4, message: 'omg' },
        { id: 5, message: 'die' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:{
            let body = action.text;
            let newMessage = {
                id : 6,
                message: body,
            };
            let newDialog = {
                id: 6,
                name: 'Me',
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                dialogs: [...state.dialogs, newDialog],
            };
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = (text) => {
    return {
        type: ADD_NEW_MESSAGE,
        text: text,
      }
}

export default dialogsReducer;