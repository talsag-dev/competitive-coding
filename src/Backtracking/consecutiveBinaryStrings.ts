/**
 * Given a non-negative integer n, generate all possible binary strings of length n such that no two consecutive '1's appear in any string.
 * Return the strings in lexicographical order.
 * @param {number} n - The length of the words
 */
export default function generateBinaryStrings(n: number) {
  const res: string[] = [];
  dfs(0, res, n, []);
  return res;
}
function dfs(startIndex: number, res: string[], n: number, path: string[]) {
  if (startIndex === n) {
    res.push(path.join(""));
    return;
  }

  for (const letter of "01") {
    if (letter === "1" && path.length && path[path.length - 1] === "1") {
      continue;
    }
    path.push(letter);
    dfs(startIndex + 1, res, n, path);
    path.pop();
  }
}
