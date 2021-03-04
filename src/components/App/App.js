import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchPage from 'routes/SearchPage/SearchPage';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import UserShowPage from 'routes/UserShowPage/UserShowPage';
import ShowDetailPage from 'routes/ShowDetailPage/ShowDetailPage';
import UserContext from 'UserContext';
import LandingPage from 'routes/LandingPage/LandingPage';
// store.js contains static data for userShows, searchResults and showDetail (Every show will display Game of Thrones' details)
import { userShows } from 'store';

class App extends Component {
  state = {
    userShows: []
  };

  storeUserShows = userShows => {
    this.setState({
      userShows: userShows,
    });
  };

  componentDidMount() {
    this.storeUserShows(userShows);
  }

  render() {
    const contextValue = {
      userShows: this.state.userShows,
    };

    return (
      <main className='App'>
        <Switch>
          <UserContext.Provider value={contextValue}>

            <Route
              exact path={'/'}
              component={LandingPage}
            />

            <Route
              exact path={'/show/:trakt_id'}
              component={ShowDetailPage}
            />

            <Route
              exact path={'/register'}
              component={RegistrationPage}
            />

            <Route
              exact path={'/search'}
              component={SearchPage}
            />

            <Route
              path={'/login'}
              component={LoginPage}
            />

            <Route
              exact path={'/watchlist'}
              component={UserShowPage}
            />

          </UserContext.Provider>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
