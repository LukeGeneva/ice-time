import formatTime from './formatTime';

test('format seconds less than a minute to string', () => {
  expect(formatTime(8)).toBe('00:08');
});

test('format seconds over a minute to string', () => {
  expect(formatTime(65)).toBe('01:05');
});
