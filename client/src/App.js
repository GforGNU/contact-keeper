import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import PostPage from './components/pages/PostPage';
import PostState from './context/post/PostState';

import './App.css';

const App = () => {
  return (
    <PostState>
  <Router>
    <Fragment>
    <Navbar />
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/PostPage' component={PostPage}/>
      </Switch>
    </div>
    </Fragment>
    </Router>
    </PostState>
  );
};

export default App;
