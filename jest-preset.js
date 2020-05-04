const path = require('path');

module.exports = {
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
        path.resolve(__dirname, './addons/index')
    ],

    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],

    testEnvironment: 'node',

    testMatch: [
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)'
    ],

    transform: {
        '\\.tsx?$': 'ts-jest'
    },

    verbose: true
};
