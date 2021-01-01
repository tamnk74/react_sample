import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutAction } from '../../Auth/store/actions';
import AdminLinks from './AdminLinks';

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { user } = this.props;
    return (
      <ul className='navbar-nav navbar-right'>
        {user.role === 'ADMIN' && <AdminLinks />}
        <li className='nav-item dropdown'>
          <button
            className='nav-link dropdown-toggle'
            id='navbarDropdownMenuLink'
            data-toggle='dropdown'
            aria-expanded='true'
          >
            {user.fullName} <span className='caret'></span>
          </button>
          <div
            className='dropdown-menu'
            aria-labelledby='navbarDropdownMenuLink'
            role='menu'
          >
            <NavLink to='/me/posts' className='dropdown-item'>
              My Posts
            </NavLink>
            <NavLink to='/me/posts/create' className='dropdown-item'>
              New Posts
            </NavLink>
            <NavLink to='/profile' className='dropdown-item'>
              Profile
            </NavLink>
            <button onClick={this.handleLogout} className='dropdown-item'>
              Logout
            </button>
          </div>
        </li>
      </ul>
    );
  }
}

SignedInLinks.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

const ConnectedSignedInLinks = connect(null, mapDispatchToProps)(SignedInLinks);
export { ConnectedSignedInLinks as SignedInLinks };
