/**
Problem: N-Queens
Description: The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens threaten each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both represent a queen and an empty space, respectively.

Example:
Input: n = 4
Output: 
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Constraints:
1 <= n <= 9.
 */
export default function solveNQueens(n: number) {
  const result: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill(".")); // Create an empty chessboard

  // Helper function to check if it's safe to place a queen at board[row][col]
  function isSafe(row: number, col: number, board: string[][]) {
    // Check the column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check the upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check the upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  // Backtracking function to solve the N-Queens problem
  function backtrack(row: number) {
    if (row === n) {
      // Found a valid solution, convert board to the expected output format and add to result
      const copy = board.map((r) => r.join(""));
      result.push(copy);
      return;
    }

    // Try placing a queen in each column of the current row
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, board)) {
        board[row][col] = "Q"; // Place the queen
        backtrack(row + 1); // Move to the next row
        board[row][col] = "."; // Backtrack (remove the queen)
      }
    }
  }

  backtrack(0); // Start placing queens from the first row
  return result;
}

// Example usage:
