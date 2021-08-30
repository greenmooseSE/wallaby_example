module.exports = function() {
  return {
    files: [
      'src/*.js',
      'src/*.ts'
    ],

    tests: [
      'test/*.test.js',
      'test/*.test.ts'
    ],

    env: {
      type: 'node'
    }
  }
};