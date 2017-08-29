import sum from '../sum';

describe('sum', () => {
  it('should be add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should be match snapshot', () => {
    expect(sum(1, 2)).toMatchSnapshot();
  });
});
