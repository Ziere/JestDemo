'use strict';

jest.mock('request');

describe('listFilesInDirectorySync', () => {
  const MOCK_DATA = {
    'to': 'to data',
    'extra': 'extra',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('request').__SET_MOCK(MOCK_DATA);
  });

  test('includes all files in the directory in the summary', () => {
    const urlRequester = require('../demoMock/urlRequester');
    return urlRequester.urlRequester('/path/to').then((response) => {
      expect(response).toBe(MOCK_DATA['to']);
    });

  });
});