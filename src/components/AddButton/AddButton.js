import React, { Component } from 'react';
import UserContext from 'UserContext'
import 'components/AddButton/AddButton.css'

/* 
Buttons should conditionally render as 
  'Add to Watchlist', 
  'Remove from List', 
  'Mark Watched' or 
  'Mark Unwatched' 
depending on whether the user has added the show or not and what it's watch_status is 
*/

class AddButton extends Component {

  static contextType = UserContext;

  addShowToList(watch_status) {
    
  }

  renderButtons() {
    const { watch_status } = this.props;
    let watchShowButton;
    let removeShowButton;
    if (!watch_status) {
      watchShowButton = (
        <button
          className='watchbutton add_watchlist'
        >
          Add to Watchlist
        </button>);

    } else {
      removeShowButton = (
        <button
          className='watchbutton remove_watchlist'
        >
          Remove from List
        </button>);
    }

    if (watch_status === 'watched') {
      watchShowButton = (
        <button
          className='watchbutton mark_unwatched'
          >
          Mark Unwatched
        </button>);
    } else if (watch_status === 'want') {
      watchShowButton = (
        <button
          className='watchbutton mark_watched'
          
        >
          Mark Watched
        </button>);
    }
    return <>{removeShowButton}{watchShowButton}</>;
  }

  render() {
    return this.renderButtons();
  }

}

export default AddButton;