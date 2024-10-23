function permutations_(arr: number[]): number[][] {
  const result: number[][] = [];

  function dfs(currentRes: number[], used: boolean[]) {
    // Base case: if currentRes is the same length as arr, we found a permutation
    if (currentRes.length === arr.length) {
      result.push([...currentRes]); // Push a copy of currentRes to result
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue; // Skip used elements

      // Include the number in the current permutation
      currentRes.push(arr[i]);
      used[i] = true; // Mark as used

      // Recur
      dfs(currentRes, used);

      // Backtrack: remove the last added number and mark it as unused
      currentRes.pop();
      used[i] = false;
    }
  }

  dfs([], Array(arr.length).fill(false)); // Start DFS with an empty result and used array
  return result;
}

// Example usage:
const nums = [1, 2, 3];
