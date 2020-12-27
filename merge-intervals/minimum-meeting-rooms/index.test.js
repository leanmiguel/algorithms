const minMeetingRooms = require("./index");

test("test case 1 ", () => {
  expect(
    minMeetingRooms([
      [4, 5],
      [2, 3],
      [2, 4],
      [3, 5],
    ])
  ).toBe(2);
});

test("test case 2 ", () => {
  expect(
    minMeetingRooms([
      [0, 30],
      [5, 10],
      [15, 20],
    ])
  ).toBe(2);
});

test("test case 3 ", () => {
  expect(
    minMeetingRooms([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  ).toBe(1);
});

test("test case 4 ", () => {
  expect(
    minMeetingRooms([
      [6, 7],
      [2, 4],
      [8, 12],
    ])
  ).toBe(1);
});

test("test case 5 ", () => {
  expect(
    minMeetingRooms([
      [1, 4],
      [2, 3],
      [3, 6],
    ])
  ).toBe(2);
});

test("test case 6 ", () => {
  expect(
    minMeetingRooms([
      [4, 5],
      [2, 3],
      [2, 4],
      [3, 5],
    ])
  ).toBe(2);
});

test("test case 7 ", () => {
  expect(
    minMeetingRooms([
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
    ])
  ).toBe(4);
});

test("test case 8 ", () => {
  expect(
    minMeetingRooms([
      [4, 5],
      [20, 25],
      [35, 40],
      [1, 50],
    ])
  ).toBe(2);
});

test("test case 9 ", () => {
  expect(minMeetingRooms([])).toBe(0);
});

test("test case 10", () => {
  expect(minMeetingRooms([[1, 2]])).toBe(1);
});

test("test case 11", () => {
  expect(
    minMeetingRooms([
      [7, 10],
      [2, 4],
    ])
  ).toBe(1);
});

test("test case 12", () => {
  expect(
    minMeetingRooms([
      [1, 4],
      [5, 6],
      [8, 9],
      [2, 6],
    ])
  ).toBe(2);
});
