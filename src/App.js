import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Map from './components/Map/Map';
import Settings from './components/Settings/Settings';
import { Route } from "react-router-dom";


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path ='/dialogs' render ={ ()=> <DialogsContainer /> } />
          <Route path = '/profile' render = {()=><Profile />} />
          <Route path = '/news' component={News} />
          <Route path = '/music' component={Music} />
          <Route path = '/settings' component={Settings} />
          <Route path = '/map' render = {()=><Map />} />
        </div>
      </div>);
}

export default App;