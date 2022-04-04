import { Route } from "react-router";
import { BrowserRouter, withRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profiles/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Plreloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route exact path="/" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={LoginPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
