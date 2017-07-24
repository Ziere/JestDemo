'use strict';

const path = require('path');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockData = Object.create(null);
function __SET_MOCK(newMockData) {
  mockData = newMockData || null;
}

function request(url) {
  return new Promise((resolver, reject) => {
    mockData[url] ? resolver(mockData[url]) : reject('ERROR')
  });
}

module.exports = request;
module.exports.__SET_MOCK = __SET_MOCK;
