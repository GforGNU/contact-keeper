import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import PostPage from './components/pages/PostPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
    <PostState>
      <AlertState>
  <Router>
    <Fragment>
    <Navbar />
    <div className='container'>
      <Alerts />
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <Route exact path='/PostPage' component={PostPage}/>
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
    </Fragment>
    </Router>
    </AlertState>
    </PostState>
    </AuthState>
  );
};

export default App;
