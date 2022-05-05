class Heap {
  #heap = [];

  constructor(list) {
    this.#heap = list;
    this.heapify();
  }

  heapify() {
    for (let x = this.#heap.length - 1; x >= 0; x--) {
      let parent = x;
      let leftChild = parent * 2 + 1;
      let rightChild = parent * 2 + 2;

      let child =
        (this.#heap[leftChild] || 0) > (this.#heap[rightChild] || 0)
          ? leftChild
          : rightChild;

      while (this.#heap[child] > this.#heap[parent]) {
        let temp = this.#heap[child];
        this.#heap[child] = this.#heap[parent];
        this.#heap[parent] = temp;

        parent = child;
        leftChild = child * 2 + 1;
        rightChild = child * 2 + 2;

        child =
          (this.#heap[leftChild] || 0) > (this.#heap[rightChild] || 0)
            ? leftChild
            : rightChild;
      }
    }
  }

  add(e) {
    this.#heap.push(e);
    this.#adjust();
  }

  print() {
    console.log(this.#heap);
  }

  #adjust() {
    let lastIndex = this.#heap.length - 1;
    let parent;
    if (lastIndex <= 2) {
      parent = 0;
    } else {
      parent =
        lastIndex % 2 === 0
          ? Math.floor(lastIndex / 2) - 1
          : Math.floor(lastIndex / 2);
    }
    while (this.#heap[lastIndex] > this.#heap[parent]) {
      let temp = this.#heap[lastIndex];
      this.#heap[lastIndex] = this.#heap[parent];
      this.#heap[parent] = temp;
      lastIndex = parent;
      if (lastIndex <= 2) {
        parent = 0;
      } else {
        parent =
          lastIndex % 2 === 0
            ? Math.floor(parent / 2) - 1
            : Math.floor(parent / 2);
      }
    }
  }

  sort() {
    const output = [];
    const len = this.#heap.length;
    for (let x = 0; x < len; x++) {
      output.push(this.delete());
    }
    return output;
  }

  delete() {
    const temp = this.#heap[0];

    this.#heap[0] = this.#heap[this.#heap.length - 1];
    this.#heap.pop();

    let parent = 0;
    let leftChild = 1;
    let rightChild = 2;

    let child =
      this.#heap[leftChild] > this.#heap[rightChild] ? leftChild : rightChild;

    while (this.#heap[parent] < this.#heap[child]) {
      let tmp = this.#heap[parent];
      this.#heap[parent] = this.#heap[child];
      this.#heap[child] = tmp;

      parent = child;
      leftChild = child * 2 + 1;
      rightChild = child * 2 + 2;

      child =
        this.#heap[leftChild] > this.#heap[rightChild] ? leftChild : rightChild;
    }
    return temp;
  }
}

module.exports = Heap;
