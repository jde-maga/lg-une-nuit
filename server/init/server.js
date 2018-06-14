const app = require('./express');

const logger = require('./logger.js');

const server = app.listen(8080, () => {
  console.log('Started server on port 8080');
});

server.on('error', (error) => {
  console.error(error);
});

module.exports = server;
