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

  setWatchStatus = (trakt_id, watch_status, updateState) => {
    let newState = this.state.userShows.map(show => {
      if (show.trakt_id === trakt_id) {
        show.watch_status = watch_status
      }
      return show
    }).filter(show => show)
    this.setState({
      userShows: newState
    })
    updateState()
  }

  redirectToLogin = () => {
    const { history } = this.props;
    if (history)
      history.push('/login');
  };

  componentDidMount() {
    this.storeUserShows(userShows);
  }

  render() {
    const contextValue = {
      userShows: this.state.userShows,
      storeUserShows: this.storeUserShows,
      redirectToLogin: this.redirectToLogin,
      setWatchStatus: this.setWatchStatus,
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
