//https://leetcode.com/problems/find-median-from-data-stream/

const MinHeap = require("../min-heap");
const MaxHeap = require("../max-heap");
class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
    this.dataStream = [];
  }

  addNum(num) {
    this.dataStream.push(num);

    if (this.maxHeap.length === 0) {
      this.maxHeap.insert(num);
      return;
    }

    if (num > this.maxHeap.peek()) {
      this.minHeap.insert(num);
    } else {
      this.maxHeap.insert(num);
    }

    if (this.dataStream.length % 2 === 0) {
      if (this.maxHeap.length() > this.minHeap.length()) {
        this.minHeap.insert(this.maxHeap.pop());
      } else if (this.minHeap.length() > this.maxHeap.length()) {
        this.maxHeap.insert(this.minHeap.pop());
      }
    }
  }

  findMedian() {
    if (this.dataStream.length === 1) return this.dataStream[0];

    if (this.dataStream.length % 2 === 0)
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    else {
      return this.minHeap.peek();
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
