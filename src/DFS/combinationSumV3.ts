/**
Problem: Combination Sum III
Description: Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note: Each number in the combination must be unique and can only appear once in each combination.
Example:

Input: k = 3, n = 7
Output: [[1, 2, 4]]
Explanation: 1 + 2 + 4 = 7

Input: k = 3, n = 9
Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
Explanation: 1 + 2 + 6 = 9, 1 + 3 + 5 = 9, 2 + 3 + 4 = 9
Constraints:
2 <= k <= 9
1 <= n <= 60
 */
export default function combinationSum(k: number, n: number): number[][] {
  const result: number[][] = [];

  function dfs(
    start: number,
    currentPartition: number[],
    remainingSum: number
  ) {
    // Base case: if we have k numbers and the remaining sum is 0, add the partition to the result
    if (currentPartition.length === k && remainingSum === 0) {
      result.push([...currentPartition]);
      return;
    }

    // Early exit: if the current partition has k elements or remainingSum is less than 0
    if (currentPartition.length >= k || remainingSum < 0) {
      return;
    }

    // Explore numbers from `start` to 9
    for (let i = start; i <= 9; i++) {
      currentPartition.push(i);
      // Recur with next number and updated remaining sum
      dfs(i + 1, currentPartition, remainingSum - i);
      currentPartition.pop(); // Backtrack
    }
  }

  dfs(1, [], n);
  return result;
}
