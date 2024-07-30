// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(root, value) {
    if (root === null) {
      return new TreeNode(value);
    }
    if (value < root.value) {
      root.left = this._insertRec(root.left, value);
    } else if (value > root.value) {
      root.right = this._insertRec(root.right, value);
    }
    return root;
  }

  inorder() {
    this._inorderRec(this.root);
    console.log();
  }

  _inorderRec(root) {
    if (root !== null) {
      this._inorderRec(root.left);
      process.stdout.write(root.value + " ");
      this._inorderRec(root.right);
    }
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(67);
tree.insert(25);
tree.insert(13);
tree.insert(72);
tree.insert(45);
tree.insert(90);
tree.insert(37);
tree.insert(58);
tree.insert(75);

tree.inorder(); // Output: 13 25 37 45 58 67 72 75 90
