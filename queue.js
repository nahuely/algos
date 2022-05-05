class Queue {
  #data = [];

  enqueue(x) {
    this.#data.push(x);
  }
  dequeue() {
    return this.#data.shift();
  }
  isEmpty() {
    return this.#data.length < 1;
  }
  first() {
    return this.#data[0];
  }
  last() {
    return this.#data[this.#data.length - 1];
  }
}

module.exports = Queue;
