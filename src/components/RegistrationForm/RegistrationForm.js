import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'components/RegistrationForm/RegistrationForm.css';

// For the static app, Login and Registration will only redirect user to Watchlist once the fields contain valid input

class RegistrationForm extends Component {
  state = {
    error: ''
  };

  static defaultProps = {
    // Should push history to '/watchlist'
    onRegistrationSuccess: () => { }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegistrationSuccess()
  };

  render() {
    return (
      <>
        <form className='RegistrationForm' onSubmit={this.handleSubmit}>
          <label htmlFor='first_name'>First Name:</label>
          <input
            id='first_name'
            name='first_name'
            type='text'
            autoComplete='given-name'
            required /><br />
          <label htmlFor='last_name'>Last Name:</label>
          <input
            id='last_name'
            name='last_name'
            type='text'
            autoComplete='family-name'
            required /><br />
          <label htmlFor='username'>Username:</label>
          <input
            id='username'
            name='username'
            type='text'
            autoComplete='off'
            required /><span className='form-error'>{this.state.error}</span><br />
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='off'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required /><br />
          <button type='submit'>
            Register
            </button>
        </form>
        <p>Or log in to an <Link to='/login'>Existing Account</Link></p>
      </>
    );
  }

}

export default RegistrationForm;