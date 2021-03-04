import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'components/LoginForm/LoginForm.css';

// For the static app, Login and Registration will only redirect user to Watchlist once the fields contain valid input

class LoginForm extends Component {
  state = {
    error: ''
  };

  static defaultProps = {
    // Should push history to '/watchlist'
    onLoginSuccess: () => { }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLoginSuccess();
  };

  render() {
    return (
      <>
        <form className='LogInForm' onSubmit={this.handleSubmit}>
          <label htmlFor='username' >Username:</label>
          <input
            id='username'
            name='username'
            type='text'
            autoComplete='username'
            required /><br />
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required /><br />
          <button type='submit'>
            Log In
          </button><br />
          <span className='form-error'>{this.state.error}</span>
        </form>
        <p>Or make a <Link to='/register' >New Account</Link></p>
      </>
    );
  }

}

export default LoginForm;