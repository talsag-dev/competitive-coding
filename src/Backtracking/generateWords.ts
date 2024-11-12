/**
 * Generates an array of strings based on the given number of characters.
 *
 * @param {number} n - The number of characters for generating words.
 * @returns {string[]} - An array of generated word strings.
 */
export default function generateWords(n: number): string[] {
  const res: string[] = [];
  dfs(res, 0, n, []);
  return res;
}

function dfs(res: string[], startIndex: number, n: number, path: string[]) {
  if (startIndex === n) {
    res.push(path.join(""));
    return;
  }

  for (const letter of "xyz") {
    path.push(letter);
    dfs(res, startIndex + 1, n, path);
    path.pop();
  }
}
