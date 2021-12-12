import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getStatus, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {useMatch} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId;
        if (this.props.match === null) {
            userId = this.props.authUserId;
        }
        else {
            userId = this.props.match.params.userId;
        }
        this.props.getProfileData(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (<>
                <Preloader isFetching={this.props.profilePage.isFetching}
                />
                <Profile profileData={this.props.profilePage.profileData}
                         updateStatus={this.props.updateStatus}
                         profileStatus={this.props.profilePage.status}
                />
            </>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        profilePage: store.profilePage,
        authUserId: store.auth.userId,
    }
}

const ProfileMatch = (props) => {
    let match = useMatch('profile/:userId/')
    return (
        <ProfileContainer {...props} match={match}/>
    )
}

export default compose(
    connect(mapStateToProps, {getProfileData, getStatus, updateStatus}),
    withAuthRedirect,
)(ProfileMatch)