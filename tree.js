const Queue = require("./queue");

class Node {
  #data = null;
  #left = null;
  #right = null;

  constructor(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
  }

  set data(x) {
    this.#data = x;
  }

  get left() {
    return this.#left;
  }

  get right() {
    return this.#right;
  }

  set left(x) {
    this.#left = x;
  }

  set right(x) {
    this.#right = x;
  }
}

class Tree {
  #root = null;

  constructor(node) {
    this.#root = node;
  }

  get root() {
    return this.#root;
  }

  preOrder(node, fn) {
    if (node !== null) {
      fn(node.data);
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  }

  inOrder(node, fn) {
    if (node !== null) {
      this.inOrder(node.left, fn);
      fn(node.data);
      this.inOrder(node.right, fn);
    }
  }

  postOrder(node, fn) {
    if (node !== null) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      fn(node.data);
    }
  }

  levelOrder(fn) {
    let queue = new Queue();
    queue.enqueue(this.#root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      fn(node.data);
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
  }

  count(node) {
    let x, y;
    if (node !== null) {
      x = this.count(node.left);
      y = this.count(node.right);

      return x + y + 1;
    }
    return 0;
  }

  countBinaryNodes(node) {
    let x, y;
    if (node !== null) {
      x = this.countBinaryNodes(node.left);
      y = this.countBinaryNodes(node.right);

      if (node.left && node.right) {
        return x + y + 1;
      } else {
        return x + y;
      }
    }
    return 0;
  }

  countValues(node) {
    let x, y;
    if (node !== null) {
      x = this.countValues(node.left);
      y = this.countValues(node.right);
      return x + y + node.data;
    }
    return 0;
  }
}

module.exports = { Node, Tree };
