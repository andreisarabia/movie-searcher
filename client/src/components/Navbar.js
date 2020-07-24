import React from 'react';

export default class Navbar extends React.Component {
  state = {
    query: '',
  };

  render() {
    return (
      <header>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onSearchTitle(this.state.query);
          }}
        >
          <input
            type='search'
            placeholder='e.g. `the matrix`'
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value.trim() })}
          />
          <button type='submit'>Search</button>
        </form>
      </header>
    );
  }
}
