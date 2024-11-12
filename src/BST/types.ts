export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  constructor(
    val: number,
    left: Node | null = null,
    right: Node | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
