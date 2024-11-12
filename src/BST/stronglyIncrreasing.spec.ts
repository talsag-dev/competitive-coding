import stronglyIncreasing from "./stronglyIncreasing";
import { Node } from "./types";

describe("stronglyIncreasing", () => {
  it("should be defined", () => {
    expect(stronglyIncreasing).toBeDefined();
  });

  it("should return true for a valid BST", () => {
    const root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    root.left.left = new Node(3);
    root.left.right = new Node(7);
    root.right.right = new Node(20);

    const result = stronglyIncreasing(root);

    expect(result).toBe(true);
  });

  it("should return false for invalid constrains", () => {
    /**
     *        10
     *      15  20
     */
    const root = new Node(10, new Node(15), new Node(20));
    expect(stronglyIncreasing(root)).toBe(false);
  });

  it("should return false for invalid constrains ", () => {
    /**
   *    10
       /  \
      5   15
     / \    \
    2   7   12
   */

    const root = new Node(10);
    root.left = new Node(5, new Node(2), new Node(7));
    root.right = new Node(15, null, new Node(12));

    const result = stronglyIncreasing(root);

    expect(result).toBe(false);
  });
});
