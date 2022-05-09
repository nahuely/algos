const { Node } = require("./tree");

class BST {
  #root = null;

  constructor(x) {
    this.#root = new Node(x);
  }

  get root() {
    return this.#root;
  }

  search(x) {
    if (!this.#root) return null;

    let current = this.#root;

    do {
      if (current.data === x) {
        return current;
      }

      if (x < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    } while (current !== null);

    return null;
  }

  insert(node, value) {
    if (node === null) {
      const newNode = new Node(value);
      return newNode;
    }
    if (value < node.data) {
      node.left = this.insert(node.left, value);
    } else if (value > node.data) {
      node.right = this.insert(node.right, value);
    }

    return node;
  }

  traverse(node, fn) {
    if (node !== null) {
      this.traverse(node.left, fn);
      fn(node.data);
      this.traverse(node.right, fn);
    }
  }

  isLeaf(node) {
    return node.left === null && node.right === null;
  }

  height(node) {
    if (node !== null) {
      let left, right;
      left = this.height(node.left);
      right = this.height(node.right);

      return left > right ? left + 1 : right + 1;
    }

    return 0;
  }

  delete(x) {
    let parent = this.#root;
    let current = parent;

    while (current !== null) {
      if (current.data === x) {
        if (this.isLeaf(current)) {
          if (parent.left === current) {
            parent.left = null;
          }
          if (parent.right === current) {
            parent.right = null;
          }
        }
      }

      parent = current;

      if (x < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}

module.exports = BST;
