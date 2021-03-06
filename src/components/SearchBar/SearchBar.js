import React, { Component } from 'react';
import 'components/SearchBar/SearchBar.css';

// SearchPage only contains static data. No user input accepted.

class SearchBar extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch()
  };

  render() {
    return (
      <form id='find-show' onSubmit={this.handleSubmit}>
        <div className='Search'>
          <label htmlFor='show-search'>Find show:</label>
          <input id='show-search' name='show-search' type='text' />
          <button type='submit' >Search</button>
        </div>
        
      </form>
    );
  }

}

export default SearchBar;