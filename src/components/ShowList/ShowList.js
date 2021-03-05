import React from 'react';
import ShowItem from 'components/ShowItem/ShowItem';

// Displays same list of static search results

function ShowList(props) {
  const shows = props.shows.map(show =>
    <li key={show.ids.trakt}>
      <ShowItem show={show} updateState={props.updateState} />
    </li>
  );

  return (
    <div className='TVShow_results'>
      {(props.searchTerm)
        ? <h2>Showing results for '{props.searchTerm}'</h2>
        : null}
      <ul>
        {shows}
      </ul>
    </div>
  );
}

export default ShowList;