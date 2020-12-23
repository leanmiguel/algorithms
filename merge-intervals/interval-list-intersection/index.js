// https://leetcode.com/problems/interval-list-intersections/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

const isOverlapping = ([x1, x2], [y1, y2]) =>
  Math.max(x1, y1) <= Math.min(x2, y2);
const getIntersection = ([x1, x2], [y1, y2]) => [
  Math.max(x1, y1),
  Math.min(x2, y2),
];

var intervalIntersection = function (A, B) {
  const intersections = [];

  // if there's an empty list, there's no intersection
  if (A.length === 0 || B.length === 0) return intersections;
  let l = 0;
  let r = 0;

  while (l < A.length && r < B.length) {
    if (isOverlapping(A[l], B[r])) {
      intersections.push(getIntersection(A[l], B[r]));
    }

    if (A[l][1] <= B[r][1]) {
      l += 1;
    } else {
      r += 1;
    }
  }

  return intersections;
};

module.exports = intervalIntersection;
