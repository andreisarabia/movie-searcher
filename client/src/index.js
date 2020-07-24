import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import MovieInfo from './components/MovieInfo';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/info' component={MovieInfo} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
