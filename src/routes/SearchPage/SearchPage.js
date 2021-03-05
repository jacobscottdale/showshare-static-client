import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import NavBar from 'components/NavBar/NavBar';
import 'components/SearchBar/SearchBar.css';
import UserContext from 'UserContext';
import { searchResults } from 'store'

// SearchPage only contains static data. No user input accepted.
// Displays same list of static search results
// Will be pulling from 3rd party API as well as my own

class SearchPage extends Component {
  state = {
    searchResults: searchResults,
    searchTerm: 'Game of Thrones',
  };

  static contextType = UserContext;

  updateUserShowsState = () => {
    
  };

  handleSearch = searchTerm => {

  };

  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <section className='SearchPage'>
          <SearchBar handleSearch={this.handleSearch} />
          <ShowList shows={this.state.searchResults} searchTerm={this.state.searchTerm} updateState={this.updateUserShowsState} />
        </section>
      </>
    );
  };
}

export default SearchPage;