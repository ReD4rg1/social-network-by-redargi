import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initialize} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="App-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="content">
                            {!this.props.app.initialized
                                ? <Preloader/>
                                : <Routes>
                                    <Route path="/profile/*" element={
                                        <ProfileContainer/>
                                    }/>
                                    <Route path="/dialogs/*" element={
                                        <DialogsContainer/>
                                    }/>
                                    <Route path="/find_friends/*" element={
                                        <FindUsersContainer/>
                                    }/>
                                    <Route path="/login/*" element={
                                        <LoginContainer/>
                                    }/>
                                </Routes>
                            }
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (store) => {
    return {
        app: store.app,
    }
}

export default connect(mapStateToProps, {initialize})(App);
