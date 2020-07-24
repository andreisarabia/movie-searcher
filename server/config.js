let secrets;

try {
  secrets = require('./secrets.json');

  if (!secrets.omdbKey || secrets.omdbKey.trim() === '') {
    throw new Error('Please provide a key for the OMDB API.');
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

module.exports = {
  get: key => secrets[key],
};
