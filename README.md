# Movie Searcher

This app does what the title suggests. It provides a UI for accessing [OMDB API](https://www.omdbapi.com/).

## Written with...

- [React](https://reactjs.org/) (with React Router DOM for frontend rendering)
- [Express](https://expressjs.com/) (for backend routing, a.k.a. the API calls to OMDB)
- [Axios](https://github.com/axios/axios) (Slightly more readable than the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
- [Morgan](https://github.com/expressjs/morgan) (for basic logging during development)

## Development

This app uses [cross-env](https://github.com/kentcdodds/cross-env) to allow development on MacOS and Windows with no further OS-specific configuration.

[Nodemon](https://github.com/remy/nodemon) is used to hot-reload changes to the backend server.

Run `npm run dev` to start the backend server (default on 3001; logic in `server/`).

Run `npm run dev:react` to start developing in React (default on 3000; logic in `client/`).

## Production

Run `npm run build` to compile a production-ready version of React.

Run `npm run start` to start listening on 3001 (Express serves the React files).

Run `npm run production` to `build` and `run` _at the same time_.
