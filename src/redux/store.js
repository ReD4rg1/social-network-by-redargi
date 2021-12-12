import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, name: "D4Rg1", message: "Hey, do you like a...?", likesCount: "117"},
                {id: 2, name: "D4Rg1",
                    message: "Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin Maou Gakuin",
                    likesCount: "153"},
            ],
            newPostText: 'post text',
        },
        dialogsPage: {
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
            newMessageText: 'message text',
        },
    },
    _callSubscriber() {},

    getState() {return this._state},
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}

export default store