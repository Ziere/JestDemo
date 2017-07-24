const add = require('../demoSimple/add');
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should return true', () => {
    jest.mock('../demoSimple/add');
    const addMock = require('../demoSimple/add');
    addMock.mockImplementation(() => 3);
    expect(addMock(5, 2)).toBe(3);
  })
});