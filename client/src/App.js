import React from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import SearchResult from './components/SearchResult';

import './App.css';

export default class App extends React.Component {
  state = {
    mostRecentQuery: '',
    searchResults: null,
  };

  async searchMovieInfo(query) {
    let mostRecentQuery, searchResults;

    if (query === '') {
      mostRecentQuery = '';
      searchResults = null;
    } else {
      const { data } = await axios.post('http://localhost:3001/api/search', {
        query,
      });

      mostRecentQuery = query;
      searchResults = data;
    }

    this.setState({ mostRecentQuery, searchResults });
  }

  render() {
    return (
      <>
        <Navbar onSearchTitle={query => this.searchMovieInfo(query)} />
      
        <main>
          {this.state.mostRecentQuery === '' ? (
            <h2>Search for a movie title</h2>
          ) : this.state.searchResults &&
            this.state.searchResults.hits === 0 ? (
            <h2>No search results found</h2>
          ) : (
            <section id='search-results'>
              <h2>{this.state.searchResults.hits} Results</h2>
              {this.state.searchResults.results.map(result => (
                <SearchResult key={result.imdbID} info={result} />
              ))}
            </section>
          )}
        </main>
      </>
    );
  }
}
