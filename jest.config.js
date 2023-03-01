module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: './coverage/',
  testRegex: '.*(\\.|/)(test|spec)\\.[jt]sx?$',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
