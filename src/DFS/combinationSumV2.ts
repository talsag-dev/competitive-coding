/**
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * Example:
 *
 * Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
 * Output:
 * [
 *   [1, 1, 6],
 *   [1, 2, 5],
 *   [1, 7],
 *   [2, 6]
 * ]
 *
 * Constraints:
 *   - The numbers in candidates can contain duplicates.
 *   - All numbers (including target) will be positive integers.
 */
export default function combinationSumV2(arr: number[], target: number) {
  const result: number[][] = [];

  arr.sort((a, b) => a - b);

  function dfs(currCombination: number[], currSum: number, start: number) {
    if (currSum === target) {
      result.push([...currCombination]);
      return;
    }

    if (currSum > target) {
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i] === arr[i - 1]) {
        continue;
      }
      currCombination.push(arr[i]);

      dfs(currCombination, currSum + arr[i], i + 1);

      currCombination.pop();
    }
  }

  dfs([], 0, 0);

  return result;
}
