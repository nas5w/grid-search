<p align="center">
  <img alt="Grid Search Icon" src="https://i.imgur.com/T8zWHlr.png" />
</p>
<p align="center">
  <img alt="Grid Search" src="https://i.imgur.com/jNszrLE.png" />
</p>

[![Build Status](https://travis-ci.org/nas5w/grid-search.svg?branch=master)](https://travis-ci.org/nas5w/grid-search) [![Codecov Status](https://codecov.io/gh/nas5w/grid-search/branch/master/graph/badge.svg)](https://codecov.io/gh/nas5w/grid-search/branch/master)

`grid-search` is a small, simple node module that can be used to generate an array of parameters to use during a machine learning grid search. It will generate every possible combination of parameters based on user input.

This package additionally ships with a small `range` method that can be used to generate a range of values between two numbers.

# Example Use

## Basic grid search parameter generation

```javascript
const { gridSearch } = require("grid-search");

const params = {
  iterations: [10, 20, 30],
  objective: "binaryCrossentropy",
  dropout: [0.4, 0.5, 0.6]
};

const search = gridSearch(params);

console.log(search);
```

Your output will be:

```javascript
[
  { iterations: 10, objective: "binaryCrossentropy", dropout: 0.4 },
  { iterations: 10, objective: "binaryCrossentropy", dropout: 0.5 },
  { iterations: 10, objective: "binaryCrossentropy", dropout: 0.6 },
  { iterations: 20, objective: "binaryCrossentropy", dropout: 0.4 },
  { iterations: 20, objective: "binaryCrossentropy", dropout: 0.5 },
  { iterations: 20, objective: "binaryCrossentropy", dropout: 0.6 },
  { iterations: 30, objective: "binaryCrossentropy", dropout: 0.4 },
  { iterations: 30, objective: "binaryCrossentropy", dropout: 0.5 },
  { iterations: 30, objective: "binaryCrossentropy", dropout: 0.6 }
];
```

## Using range

The previous example can use the `range` function to specify the `iterations` and `dropout` parameters and achieve the exact same result.

`range(start, finish, step)`

```javascript
const { range } = require("grid-search");

const params = {
  iterations: range(10, 30, 10),
  objective: "binaryCrossentropy",
  dropout: range(0.4, 0.6, 0.1)
};
```

# Contributing

Contributions welcome! Please open an issue in the [Github repository](https://github.com/nas5w/grid-search) describing what changes you would like to see (or to contribute yourself).
