const express = require('express');
const { default: axios } = require('axios');

const config = require('../config');
const is = require('../util/is');

const httpApi = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=${config.get('omdbKey')}`,
});

const exampleSearch = require('../../data/example-search.json');
const exampleResult = require('../../data/example-result.json');

const router = express.Router();

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function searchMovieTitle(req, res) {
  const { query } = req.body;

  if (!query || !is.alphanumericWithWhitespace(query)) {
    return res.status(400).json({
      error: 'Cannot search for a movie without a valid search term.',
    });
  }

  if (exampleSearch.Response === 'True') {
    return res.json({
      results: exampleSearch.Search,
      hits: +exampleSearch.totalResults,
    });
  }

  res.json({ error: 'We are unable to get search results at this time.' });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function fetchMovieInfo(req, res) {
  const { imdbId } = req.params;

  if (!imdbId || !is.alphanumeric(imdbId)) {
    return res.status(400).json({ error: 'No valid movie ID provided.' });
  }

  console.log(imdbId);

  res.json({ data: exampleResult });
}

module.exports = router
  .post('/search', searchMovieTitle)
  .get('/:imdbId', fetchMovieInfo);
