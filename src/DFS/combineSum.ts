/**
 * Input: candidates = [2, 3, 6, 7], target = 7
Output: [[2, 2, 3], [7]]
Explanation: 
    - 2 + 2 + 3 = 7
    - 7 = 7
These are the only two combinations.

Constraints:
    - All numbers (including target) will be positive integers.
    - The solution set must not contain duplicate combinations.
Numbers in candidates can be reused any number of times.

 */
export default function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];

  function dfs(
    currentCombination: number[],
    currentSum: number,
    start: number
  ) {
    // Base case: if the current sum matches the target, add the combination to the result
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    // If the current sum exceeds the target, stop exploring further
    if (currentSum > target) {
      return;
    }

    // Explore all candidates starting from the 'start' index (to allow reusing the same element)
    for (let i = start; i < candidates.length; i++) {
      // Add the candidate to the current combination
      currentCombination.push(candidates[i]);

      // Recur with the updated sum and the same starting index (allowing reuse)
      dfs(currentCombination, currentSum + candidates[i], i);

      // Backtrack: remove the last added number to try another combination
      currentCombination.pop();
    }
  }

  // Start DFS with an empty combination and sum of 0
  dfs([], 0, 0);

  return result;
}
