import React from "react";
import {connect} from "react-redux";
import {
    followToggle, getUsers,
    updateNewFindUsersText
} from "../../redux/find-users-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class FindUsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.findUsersPage.currentPage, this.props.findUsersPage.pageSize);
    }

    onPageChange = (page) => {
        if (page !== this.props.findUsersPage.currentPage) {
            this.props.getUsers(page, this.props.findUsersPage.pageSize);
        }
    }

    render() {
        return (<>
                <Preloader isFetching={this.props.findUsersPage.isFetching}
                />
                <FindUsers {...this.props.findUsersPage}
                           updateNewFindUsersText={this.props.updateNewFindUsersText}
                           onPageChange={this.onPageChange}
                           follow={this.props.followToggle}
                />
            </>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        findUsersPage: store.findUsersPage,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            updateNewFindUsersText,
            getUsers,
            followToggle,
        }),
    withAuthRedirect,
)(FindUsersAPIComponent)