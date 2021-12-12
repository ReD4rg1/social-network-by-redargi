import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (store) => {
    return {
        ...store.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        onMessageChange: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)