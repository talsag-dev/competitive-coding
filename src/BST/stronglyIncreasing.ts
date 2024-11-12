import { Node } from "./types";

/**
 * 
 * @param root TreeNode 
 * @returns boolean
 * @description 
 *  You are given the root of a binary tree, and you need to determine if it is a strictly increasing BST. In this variation:
    Each node in the left subtree should have a value that is strictly less than its parent.
    Each node in the right subtree should have a value that is strictly greater than its parent.
    Each level of the tree should have values that are increasing from left to right.
    Both the left and right subtrees must also be strictly increasing BSTs.
        10
       /  \
      5    15
     / \    \
    3   7   20
 */
export default function stronglyIncreasing(
  root: Node | null,
  min = -Infinity,
  max = Infinity
): boolean {
  if (root === null) {
    return true; // an empty tree is a valid BST
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  // Recursively check the left and right subtrees with updated constraints
  return (
    stronglyIncreasing(root.left, min, root.val) &&
    stronglyIncreasing(root.right, root.val, max)
  );
}
