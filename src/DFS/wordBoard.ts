/**
Problem: Word Search
Description: Given an m x n board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

Input: board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], word = "ABCCED"
Output: true

Explanation: The word "ABCCED" exists in the board as follows:
[
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]
Constraints:
1 <= m, n <= 6
1 <= word.length <= 15
Each letter in the grid and word will be an uppercase English letter.
 */

export default function findWordInBoard(board: string[][], word: string) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(row: number, col: number, index: number): boolean {
    if (index === word.length) return true;

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";

    const found =
      dfs(row + 1, col, index + 1) || // Down
      dfs(row - 1, col, index + 1) || // Up
      dfs(row, col + 1, index + 1) || // Right
      dfs(row, col - 1, index + 1); // Left

    board[row][col] = temp;

    return found;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === word[0] && dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}
