const { gridSearch } = require("./");
const { range } = require("./");

const params = {
  iterations: range(10, 30, 10),
  objective: "binaryCrossentropy",
  dropout: range(0.4, 0.6, 0.1)
};

const search = gridSearch(params);

console.log(search);
