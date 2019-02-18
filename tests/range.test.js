const { range } = require("../");

test("Basic range should have the correct number of elements", () => {
  const arr = range(1, 3);
  expect(arr.length).toBe(3);
});

test("Basic range should have the correct elements", () => {
  const arr = range(1, 3);
  expect(arr[0]).toBe(1);
  expect(arr[1]).toBe(2);
  expect(arr[2]).toBe(3);
});

test("Range with step should have the correct number of elements", () => {
  const arr = range(2, 6, 2);
  expect(arr.length).toBe(3);
});

test("Range with step should have the correct elements", () => {
  const arr = range(2, 6, 2);
  expect(arr[0]).toBe(2);
  expect(arr[1]).toBe(4);
  expect(arr[2]).toBe(6);
});

test("Range with decimal step should have the correct number of elements", () => {
  const arr = range(1, 3, 0.5);
  expect(arr.length).toBe(5);
});

test("Range with decimal step should have the correct elements", () => {
  const arr = range(1, 3, 0.5);
  expect(arr[0]).toBe(1);
  expect(arr[1]).toBe(1.5);
  expect(arr[2]).toBe(2);
  expect(arr[3]).toBe(2.5);
  expect(arr[4]).toBe(3);
});
