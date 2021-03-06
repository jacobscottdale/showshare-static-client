import React, { Component } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import NavBar from 'components/NavBar/NavBar';
import 'routes/LoginPage/LoginPage.css'

// For the static app, Login and Registration will only redirect user to Watchlist once the fields contain valid input

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    history.push('/watchlist');
  };

  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <section className='LoginPage'>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </section>
      </>
    );
  }

}
