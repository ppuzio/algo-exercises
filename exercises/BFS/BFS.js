class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  traverse() {
    if (this.root === null) {
      return undefined;
    }
    let values = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      //
    }
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);
