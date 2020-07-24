# A typical request path

Requests are processed by the order in which middlewares are attached to Express.

An instance of Express is first initialized, then it takes in the following

```js
// ...get some variables before here, then...
app.use(morgan('dev')); // first middleware the request hits; logs the request
app.use(headerMiddleware(isProd)); // custom middleware that sets global headers
app.use(express.json()); // allows JSON parsing in request handling
app.use('/api', apiRoutes); // actual API logic that explicitly responds to the client
app.listen(port, ...);
```

In production, Express handles the pre-built React files right before `listen`ing. This ensures that all paths not starting with `/api` are handled by React (i.e. the frontend).

```js
app.use(express.static(staticPath)); // serves files that aren't `index.html`, e.g. `.js`
app.get('*', (req, res) => res.sendFile(filePath)); // serves `index.html`
```
