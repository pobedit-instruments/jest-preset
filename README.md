# @pobedit/jest-preset

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)

A preset that is used as a base for Jest's configuration

## Installation

Install with npm or Yarn:

**npm**:

```
npm install @pobedit/jest-preset --save
```

**Yarn**:

```
yarn add @pobedit/jest-preset
```

## Basic usage

Jest's configuration can be defined in the package.json file of your project or using a jest.config.js file:

**package.json**:

```

{
  "jest": {
    "preset": "@pobedit/jest-preset"
  }
}
```


**jest.config.js**:

```

{
    "preset": "@pobedit/jest-preset"
}
```

## Contributing
   
Feel free to submit a pull request if you find any bugs. 
Please make sure all commits are properly documented.

## Tests

```
npm test
```

## Publishing

```
npm publish --access public --verbose
```

## License

MIT
