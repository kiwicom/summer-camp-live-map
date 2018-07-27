// @flow
module.exports = {
  roots: ['<rootDir>/__tests__'],
  testRegex: 'test\\.js?$',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  setupTestFrameworkScriptFile:
    '<rootDir>/__tests__/setup/test_framework_setup.js',
  setupFiles: ['<rootDir>/__tests__/setup/test_framework_setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(shared)/).*/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file_mock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/style_mock.js',
  },
};
