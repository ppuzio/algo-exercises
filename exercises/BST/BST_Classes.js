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
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    let finished = false;
    let currentPoint = this.root;
    while (!finished) {
      if (currentPoint.value < value) {
        if (currentPoint.right) {
          currentPoint = currentPoint.right;
        } else {
          currentPoint.right = new Node(value);
          finished = true;
        }
      }
      if (currentPoint.value > value) {
        if (currentPoint.left) {
          currentPoint = currentPoint.left;
        } else {
          currentPoint.left = new Node(value);
          finished = true;
        }
      }
    }
    return this;
  }
  find(value) {
    if (this.root === null) {
      return undefined;
    }
    let currentPoint = this.root;
    if (currentPoint.value === value) {
      return "found value";
    }
    while (true) {
      if (currentPoint.value < value) {
        if (currentPoint.right) {
          currentPoint = currentPoint.right;
          if (currentPoint.value === value) {
            return "value found";
          }
        } else {
          return "not found";
        }
      }

      if (currentPoint.value > value) {
        if (currentPoint.left) {
          currentPoint = currentPoint.left;
          if (currentPoint.value === value) {
            return "Value found!";
          }
        } else {
          return "not found";
        }
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(14);
tree.insert(12);
tree.insert(16);
