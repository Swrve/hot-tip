module.exports = {
  verbose: true,
  bail: false,
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/'],
  testMatch: [
    '**/?(*.)spec.js?(x)'
  ]
}
