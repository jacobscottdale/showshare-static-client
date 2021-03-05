import React from 'react'

export default React.createContext({
  userShows: [],
  storeUserShows: () => {},
  redirectToLogin: () => {},
  setWatchStatus: () => {},
})