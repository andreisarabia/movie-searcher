import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResult extends React.Component {
  render() {
    const { info } = this.props;

    return (
      <Link to={`/info/${info.imdbID}`}>
        <div className='info-snippet'>
          <div className='info-poster'>
            {info.Poster === 'N/A' ? (
              <p>(No poster available)</p>
            ) : (
              <img loading='lazy' src={info.Poster} alt={info.Title} />
            )}
          </div>

          <div className='title-year'>
            <h3>{info.Title}</h3>
            &nbsp;<span>({info.Year})</span>
          </div>
        </div>
      </Link>
    );
  }
}
