class Stack {
  constructor(len) {
    this.#len = len;
  }

  #data = [];
  #len;

  push(x) {
    if (this.#data.length < this.#len) {
      this.#data.push(x);
    } else {
      throw new Error("capacity full");
    }
  }

  pop() {
    return this.#data.pop();
  }

  peek(x) {
    return this.#data[this.#data.length - x];
  }

  stackTop() {
    return this.#data[this.#data.length - 1];
  }

  isEmpty() {
    return this.#data.length <= 0 ? true : false;
  }

  isFull() {
    return this.#data.length === this.#len;
  }

  print() {
    console.log(this.#data);
  }
}

module.exports = Stack;
