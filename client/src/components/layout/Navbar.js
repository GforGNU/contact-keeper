import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = ({title, icon}) => {
    return (
        <div >
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Profile</a>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>Add Post</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/PostPage'>Posts</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};




export default Navbar;