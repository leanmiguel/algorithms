class MinHeap {
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  peek() {
    return this.data[0];
  }
  length() {
    return this.data.length;
  }

  bubbleUp(index) {
    while (index > 0) {
      // get the parent
      var parent = Math.floor((index + 1) / 2) - 1;

      // if parent is greater than child
      if (this.data[parent] > this.data[index]) {
        // swap
        var temp = this.data[parent];
        this.data[parent] = this.data[index];
        this.data[index] = temp;
      }

      index = parent;
    }
  }

  pop() {
    var min = this.data[0];

    // set first element to last element
    this.data[0] = this.data.pop();

    // call bubble down
    this.bubbleDown(0);

    return min;
  }

  bubbleDown(index) {
    while (true) {
      var child = (index + 1) * 2;
      var sibling = child - 1;
      var toSwap = null;

      // if current is greater than child
      if (this.data[index] > this.data[child]) {
        toSwap = child;
      }

      // if sibling is smaller than child, but also smaller than current
      if (
        this.data[index] > this.data[sibling] &&
        (this.data[child] == null ||
          (this.data[child] !== null && this.data[sibling] < this.data[child]))
      ) {
        toSwap = sibling;
      }

      // if we don't need to swap, then break.
      if (toSwap == null) {
        break;
      }

      var temp = this.data[toSwap];
      this.data[toSwap] = this.data[index];
      this.data[index] = temp;

      index = toSwap;
    }
  }
}

module.exports = MinHeap;
