// Activity 5: Tree Traversal (Optional)
// - Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function inorderTraversal(node) {
  if (node === null) {
    return;
  }
  inorderTraversal(node.left);
  console.log(node.value);
  inorderTraversal(node.right);
}
const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

console.log("In-Order Traversal:");
inorderTraversal(root);
// - Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calculateDepth(node) {
  if (node === null) return 0;
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const root2 = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(4)),
  new TreeNode(15, null, new TreeNode(18))
);

console.log("Tree Depth " + calculateDepth(root2));
