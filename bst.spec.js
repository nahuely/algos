const BST = require("./bst");

describe("BST", () => {
  test("create bst", () => {
    const bst = new BST(10);
    bst.insert(bst.root, 29);
    bst.insert(bst.root, 59);
    bst.insert(bst.root, 2);
    bst.insert(bst.root, 5);

    expect(bst.root).not.toBeNull();
  });

  test("search", () => {
    const bst = new BST(10);
    bst.insert(bst.root, 29);
    bst.insert(bst.root, 59);
    bst.insert(bst.root, 2);
    bst.insert(bst.root, 5);

    expect(bst.search(2)).not.toBeNull();
    expect(bst.search(199)).toBeNull();
  });

  test("traverse", () => {
    const output = [];
    const bst = new BST(100);
    bst.insert(bst.root, 29);
    bst.insert(bst.root, 2);
    bst.insert(bst.root, 12);
    bst.insert(bst.root, 54);

    bst.traverse(bst.root, (val) => output.push(val));

    expect(output).toEqual([2, 12, 29, 54, 100]);
  });

  test("height", () => {
    const bst = new BST(1);
    bst.insert(bst.root, 2);
    bst.insert(bst.root, 3);

    bst.insert(bst.root, 0);
    bst.insert(bst.root, -2);
    bst.insert(bst.root, -3);

    expect(bst.height(bst.root)).toEqual(4);
  });

  test.skip("delete", () => {
    const bst = new BST(30);
    bst.insert(bst.root, 20);
    bst.insert(bst.root, 90);
    bst.insert(bst.root, 10);
    bst.insert(bst.root, 25);
    bst.insert(bst.root, 35);
    bst.insert(bst.root, 45);

    bst.delete(bst.root, 90);
    expect(bst.search(90)).toBeNull();
    expect(bst.search(45)).not.toBeNull();
  });

  test("isleaf", () => {
    const bst = new BST(30);
    bst.insert(bst.root, 50);
    expect(bst.isLeaf(bst.root.right)).toBe(true);
  });

  test("inPost", () => {
    const bst = new BST(30);
    bst.insert(bst.root, 50);
    bst.insert(bst.root, 20);
    bst.insert(bst.root, 25);

    expect(bst.inPost(bst.root.left)).toHaveProperty("data", 25);
  });

  test("inSuccessor", () => {
    const bst = new BST(30);
    bst.insert(bst.root, 20);
    bst.insert(bst.root, 90);
    bst.insert(bst.root, 10);
    bst.insert(bst.root, 25);
    bst.insert(bst.root, 35);
    bst.insert(bst.root, 45);

    expect(bst.inSuccessor(bst.root.right)).toHaveProperty("data", 35);
  });
});
