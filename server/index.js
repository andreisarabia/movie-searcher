const express = require('express');
const morgan = require('morgan');

const headerMiddleware = require('./middlewares/headers');
const apiRoutes = require('./routes/api');

const port = process.env.APP_PORT || 3001;
const isProd = process.env.NODE_ENV === 'production';

const app = express();

app.use(morgan('dev'));
app.use(headerMiddleware(isProd));
app.use(express.json());
app.use('/api', apiRoutes);

if (isProd) {
  const path = require('path');
  const staticPath = path.join(__dirname, '..', 'client', 'build');
  const filePath = path.join(__dirname, '..', 'client', 'build', 'index.html');

  app.use(express.static(staticPath));
  app.get('*', (req, res) => res.sendFile(filePath));
}

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
