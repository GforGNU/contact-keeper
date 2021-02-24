import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const Navbar = ({title, icon}) => {
  const authContext = useContext(AuthContext);

  const {isAuthenticated, logout, user} = authContext;

  const onLogout = () => {
    logout();
  }

const authLinks = (
  <Fragment>
    <li>Hello {user && user.name}</li>
    <lli>
      <a onClick={onLogout} href="#!">
        <i className="fas fa=sign-out-alt"></i> <span className="hide-sm">Logout</span>
      </a>
    </lli>

</Fragment>
  
)
const guestLinks = (
  <Fragment>
     <li className="nav-item">
      <Link className="nav-link" to='/register'>Register</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/login'>LogIn</Link>
      </li>

</Fragment>
  
)

    return (
        <div >
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Profile</a>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
   {isAuthenticated ? authLinks : guestLinks}
  
    </ul>
  </div>
</nav>
        </div>
    );
};




export default Navbar;