const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Eldar", message: "Hey, Kirill, do you like a...?"},
        {id: 2, name: "Drug", message: "go bf"},
        {id: 3, name: "Egor", message: "hahahah"},
    ],
    messagesData: [
        {id: 1, name: "Eldar", message: "Hey, Kirill, do you like a..."},
        {id: 2, name: "Kirill", message: "bf1?"},
        {id: 3, name: "Eldar", message: "no"},
    ],
    newMessageText: 'message text'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== '') {
                return {
                    ...state,
                    newMessageText: '',
                    messagesData: [...state.messagesData, {
                        id: 4,
                        name: "Kirill",
                        message: state.newMessageText,
                    }]
                }
            }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.newText };

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;