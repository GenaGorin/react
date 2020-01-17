import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Map from './components/Map/Map';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from "react-router-dom";
import Login from './components/Login/Login';
import { initializedAppThunk } from './redux/appReducer';
import { connect } from "react-redux";
//import App from './App';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/redux-store';


class App extends React.Component {

  componentDidMount() {
    this.props.initializedAppThunk();
  }

  render() {
    if (!this.props.isAuth) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/map' render={() => <Map />} />
          <Route path='/Login' render={() => <Login />} />
        </div>
      </div>);
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.initialized.initialaized,
  }
}

let AppContainer = connect(mapStateToProps, { initializedAppThunk })(App);

let SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </ Provider>
    </BrowserRouter>
  );
}

export default SamuraiJsApp;