module.exports = {
  verbose: true,
  bail: false,
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: [
    '**/?(*.)spec.js?(x)'
  ]
}
