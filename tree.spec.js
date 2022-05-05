const { Tree, Node } = require("./tree");

describe("tree", () => {
  test("create tree", () => {
    const tree = new Tree(new Node("A"));

    expect(tree.root).not.toBeNull();
    expect(tree.root.data).toBe("A");
  });

  test("create tree with branches", () => {
    const tree = new Tree(new Node("A"));
    tree.root.left = new Node("B");
    tree.root.right = new Node("C");
    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");
    tree.root.right.left = new Node("F");
    tree.root.right.right = new Node("G");

    expect(tree.root.left).not.toBeNull();
    expect(tree.root.left.left).not.toBeNull();
    expect(tree.root.left.left.left).toBeNull();
  });

  test("preorder", () => {
    const output = [];

    const tree = new Tree(new Node(8));
    tree.root.left = new Node(3);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(9);
    tree.root.right.left = new Node(7);
    tree.root.right.right = new Node(2);

    tree.preOrder(tree.root, (val) => output.push(val));

    expect(output).toEqual([8, 3, 4, 9, 5, 7, 2]);
  });

  test("inorder", () => {
    const output = [];

    const tree = new Tree(new Node("A"));
    tree.root.left = new Node("B");
    tree.root.right = new Node("C");
    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");
    tree.root.right.left = new Node("F");
    tree.root.right.right = new Node("G");

    tree.inOrder(tree.root, (val) => output.push(val));

    expect(output).toEqual(["D", "B", "E", "A", "F", "C", "G"]);
  });

  test("postorder", () => {
    const output = [];

    const tree = new Tree(new Node("A"));
    tree.root.left = new Node("B");
    tree.root.right = new Node("C");
    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");
    tree.root.right.left = new Node("F");
    tree.root.right.right = new Node("G");

    tree.postOrder(tree.root, (val) => output.push(val));

    expect(output).toEqual(["D", "E", "B", "F", "G", "C", "A"]);
  });

  test("levelorder", () => {
    const output = [];

    const tree = new Tree(new Node("A"));
    tree.root.left = new Node("B");
    tree.root.right = new Node("C");
    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");
    tree.root.right.left = new Node("F");
    tree.root.right.right = new Node("G");

    tree.levelOrder((val) => output.push(val));

    expect(output).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
  });

  test("count nodes of tree", () => {
    const tree = new Tree(new Node("A"));
    tree.root.left = new Node("B");
    tree.root.right = new Node("C");
    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");
    tree.root.right.left = new Node("F");
    tree.root.right.right = new Node("G");

    expect(tree.count(tree.root)).toEqual(7);
  });

  test("count nodes that have 2 childrens", () => {
    const tree = new Tree(new Node("A"));
    tree.root.left = new Node("B");
    tree.root.right = new Node("C");
    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");
    tree.root.right.left = new Node("F");
    tree.root.right.right = new Node("G");

    expect(tree.countBinaryNodes(tree.root)).toEqual(3);
  });

  test("count node values", () => {
    const tree = new Tree(new Node(8));
    tree.root.left = new Node(3);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(9);
    tree.root.right.left = new Node(7);
    tree.root.right.right = new Node(2);

    expect(tree.countValues(tree.root)).toEqual(38);
  });
});
