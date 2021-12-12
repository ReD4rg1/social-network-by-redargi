import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setUsersData} from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component {

    render() {
        return (
            <Header isAuth={this.props.auth.isAuth}
                    name={this.props.auth.login}
                    logout={this.props.logout}
            />
        )
    }
}

let mapStateToProps = (store) => {
    return {
        auth: store.auth,
    }
}

const HeaderContainer = connect(mapStateToProps,
    {
        setUsersData,
        logout,
    })(HeaderAPIContainer);

export default HeaderContainer