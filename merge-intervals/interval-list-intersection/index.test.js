const intervalIntersection = require("./index");

test("test case 1 ", () => {
  expect(
    intervalIntersection(
      [
        [0, 2],
        [5, 10],
        [13, 23],
        [24, 25],
      ],
      [
        [1, 5],
        [8, 12],
        [15, 24],
        [25, 26],
      ]
    )
  ).toMatchObject([
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ]);
});

test("test case 2 ", () => {
  expect(
    intervalIntersection(
      [
        [1, 3],
        [5, 7],
        [9, 12],
      ],
      [[5, 10]]
    )
  ).toMatchObject([
    [5, 7],
    [9, 10],
  ]);
});

test("test case 3 ", () => {
  expect(
    intervalIntersection(
      [[8, 15]],
      [
        [2, 6],
        [8, 10],
        [12, 20],
      ]
    )
  ).toMatchObject([
    [8, 10],
    [12, 15],
  ]);
});

test("test case 4 ", () => {
  expect(
    intervalIntersection(
      [[17, 20]],
      [
        [2, 3],
        [6, 8],
        [12, 14],
        [19, 20],
      ]
    )
  ).toMatchObject([[19, 20]]);
});

test("test case 5 ", () => {
  expect(
    intervalIntersection(
      [
        [1, 3],
        [5, 6],
        [7, 9],
      ],
      [
        [2, 3],
        [5, 7],
      ]
    )
  ).toMatchObject([
    [2, 3],
    [5, 6],
    [7, 7],
  ]);
});

test("test case 6 ", () => {
  expect(
    intervalIntersection(
      [
        [1, 3],
        [7, 8],
        [14, 16],
      ],
      [
        [0, 2],
        [5, 6],
        [7, 12],
        [16, 20],
      ]
    )
  ).toMatchObject([
    [1, 2],
    [7, 8],
    [16, 16],
  ]);
});

test("test case 7", () => {
  expect(
    intervalIntersection(
      [
        [2, 5],
        [6, 9],
        [18, 19],
        [22, 38],
        [40, 59],
        [86, 87],
      ],
      [
        [17, 18],
        [20, 24],
        [26, 27],
        [28, 34],
        [42, 43],
        [48, 62],
        [73, 78],
        [80, 83],
        [90, 95],
        [96, 100],
      ]
    )
  ).toMatchObject([
    [18, 18],
    [22, 24],
    [26, 27],
    [28, 34],
    [42, 43],
    [48, 59],
  ]);
});
