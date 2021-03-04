import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'components/NavBar/NavBar.css';
import UserContext from 'UserContext';

class NavBar extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  static contextType = UserContext;

  handleLogout = () => {

  };

  renderLoginButton() {
    return (
      <li>
        <button
          onClick={() => this.props.history.push('/login')}
          className='log_button login'
        >
          log in
        </button>
      </li>
    );
  }

  renderLogoutButton() {
    return (
      <li>
        <button
          onClick={() => this.handleLogout()}
          className='log_button logout'
        >
          log out
        </button>
      </li>
    );
  }

  render() {
    return (
      <header className='NavBar'>
        <Link to='/'>
          <div><h1>showshare</h1></div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/search'>search</Link>
            </li>
            <li>
              <Link to='/watchlist'>
                Test User's watchlist
                  </Link>
            </li>
            {this.renderLoginButton()}
          </ul>
        </nav>
      </header>
    );
  }

}

export default NavBar;