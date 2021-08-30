/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '/test/.*jest.test\.*',
    // setupFiles: [
    //     '<rootDir>/.jest/setEnvVars.ts',
    // ],
    // setupFilesAfterEnv: [
    //     '<rootDir>/.jest/testSetup.ts'
    // ]
};
