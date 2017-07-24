const request = require('request');

const urlRequester = (url) => request(url);

module.exports = urlRequester