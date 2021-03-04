import React, { Component } from 'react';
import UserShowList from 'components/UserShowList/UserShowList';
import NavBar from 'components/NavBar/NavBar';
import SearchBar from 'components/SearchBar/SearchBar';
import UserContext from 'UserContext';

// Displays same list of static user shows

class UserShowPage extends Component {
  static contextType = UserContext;

  updateUserShowsState = () => {

  };

  handleSearch = searchTerm => {
    this.props.history.push('/search');
  };

  componentDidMount() {
    this.updateUserShowsState();
  }


  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <SearchBar handleSearch={this.handleSearch}></SearchBar>
        <section className='UserShowPage'>
          {!this.context.userShows[0]
            ?
            <p>Start by searching for a show to add to your watch list!</p>
            :
            <UserShowList updateState={this.updateUserShowsState} />
          }
        </section>
      </>
    );
  }
}


export default UserShowPage;