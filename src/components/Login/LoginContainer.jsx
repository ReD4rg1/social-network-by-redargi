import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

class LoginContainer extends React.Component {

    render() {
        if (this.props.auth.isAuth) {
            return <Navigate to={'/profile'} />
        }
        return (<>
                <Preloader/>
                <Login login={this.props.login}
                       isAuth={this.props.auth.isAuth}
                />
            </>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        auth: store.auth,
    }
}

export default connect(mapStateToProps,
    {login})(LoginContainer);