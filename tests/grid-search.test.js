const { gridSearch } = require("../");

test("Basic grid search has correct number of elements", () => {
  const params = {
    one: [1, 2],
    two: [3, 4]
  };
  const grid = gridSearch(params);
  expect(grid.length).toBe(4);
});
