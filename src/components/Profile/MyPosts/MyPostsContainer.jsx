import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";

let mapStateToProps = (store) => {
    return {
        profilePage: store.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {
        addPost,
        updateNewPostText,
    })(MyPosts);

export default MyPostsContainer