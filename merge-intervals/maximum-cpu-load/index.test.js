const maximumCpuLoad = require("./index");

test("test case 1 ", () => {
  expect(
    maximumCpuLoad([
      [1, 4, 3],
      [2, 5, 4],
      [7, 9, 6],
    ])
  ).toBe(7);
});

test("test case 2 ", () => {
  expect(
    maximumCpuLoad([
      [6, 7, 10],
      [2, 4, 11],
      [8, 12, 15],
    ])
  ).toBe(15);
});

test("test case 3 ", () => {
  expect(
    maximumCpuLoad([
      [1, 4, 2],
      [2, 4, 1],
      [3, 6, 5],
    ])
  ).toBe(8);
});

test("test case 4 ", () => {
  expect(maximumCpuLoad([])).toBe(0);
});

test("test case 5 ", () => {
  expect(maximumCpuLoad([[1, 2, 1]])).toBe(1);
});

test("test case 6 ", () => {
  expect(
    maximumCpuLoad([
      [1, 2, 1],
      [2, 3, 1],
      [0, 1, 1],
      [4, 5, 1],
    ])
  ).toBe(3);
});
