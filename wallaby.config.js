module.exports = () => ({
  autoDetect: true,
  files: [
    'src/**/*.ts?(x)',
    {pattern: 'src/__tests__/**/*Test?(s).ts?(x)', ignore: true}
  ],
  tests: [
    'test/**/faker.jest.test.ts?(x)',
  ],

  // Gör så att varningar som annars syns bara via npm test visas som fel när wallabyJS körs.
  reportConsoleErrorAsError: true,
  workers: {
    initial: 1,
    regular: 1,
    ////Avoids wallaby to reuse process to speed up test execution (resolves :Some long running
    // code has been detected: one of your files is taking more than 5000ms to execute.
    //  see https://github.com/wallabyjs/public/issues/2774
    restart: true,
  },
  maxConsoleMessagesPerTest: 20,

});
