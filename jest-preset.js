module.exports = {
    coverageDirectory: 'coverage',

    moduleFileExtensions: [
        'less',
        'js',
        'json',
        'ts',
        'tsx'
    ],

    'moduleNameMapper': {
        '^.+.(css|less|png|jpg|ttf|woff|woff2)$|\1\?inline': 'jest-transform-stub'
    },

    setupFiles: [
        './jest/setup-files/index'
    ],

    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],

    testEnvironment: 'node',

    testMatch: [
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)'
    ],

    testPathIgnorePatterns: [
        '/node_modules/'
    ],

    transform: {
        '\\.tsx?$': 'ts-jest'
    },

    verbose: true
};
