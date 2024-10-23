/**
Problem: Subset II
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set). The solution set must not contain duplicate subsets.

Example:

Input: nums = [1, 2, 2]
Output: 
[
  [],
  [1],
  [1, 2],
  [1, 2, 2],
  [2],
  [2, 2]
]
 */
export default function subsetV2(arr: number[]): number[][] {
  const result: number[][] = [];

  arr.sort((a, b) => a - b);

  function dfs(currArr: number[], start: number) {
    result.push([...currArr]);

    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i] === arr[i - 1]) {
        continue;
      }

      currArr.push(arr[i]);

      dfs(currArr, i + 1);

      currArr.pop();
    }
  }

  dfs([], 0);

  return result;
}
