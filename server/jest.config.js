module.exports = {
  roots: ['<rootDir>/__tests__'],
  testRegex: 'test\\.js$',
  moduleFileExtensions: ['js', 'json'],
  setupTestFrameworkScriptFile:
    '<rootDir>/__tests__/setup/test_framework_setup.js',
  globalTeardown: '<rootDir>/__tests__/setup/global_teardown.js',
  globalSetup: '<rootDir>/__tests__/setup/global_setup.js',
  browser: false,
  testURL: 'http://localhost/',
};
