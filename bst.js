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
    } while (current);

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

  inPost(node) {
    let curr = node;
    while (curr && curr.right) {
      curr = curr.right;
    }
    return curr;
  }

  inSuccessor(node) {
    let curr = node;
    while (curr && curr.left) {
      curr = curr.left;
    }
    return curr;
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

  delete(node, value) {
    if (!node) {
      return null;
    }

    if (this.isLeaf(node) && node.data) {
      if (node === this.root) {
        this.#root = null;
        return null;
      }
      node = null;
      return null;
    }

    if (value < node.data) {
      node.left = this.delete(node.left, value);
    } else if (value > node.right) {
      node.right = this.delete(node.right, value);
    } else {
      if (this.height(node.left) > this.height(node.right)) {
        const q = this.inPost(node.left);
        node.data = q.data;
        node.left = this.delete(node.left, q.data);
      } else {
        const q = this.inSuccessor(node.right);
        node.data = q.data;
        node.right = this.delete(node.right, q.data);
      }
    }
  }
}

module.exports = BST;
