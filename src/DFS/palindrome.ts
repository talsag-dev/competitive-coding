/**
Problem: Palindrome Partitioning
Description: Given a string s, partition s such that every substring in the partition is a palindrome. Return all possible palindrome partitioning of s.

Example:


Input: s = "aab"
Output: 
[
  ["a", "a", "b"],
  ["aa", "b"]
]
Constraints:

1 <= s.length <= 16
s consists of lowercase English letters only.
 */
export default function allPalindromeSubsets(str: string) {
  const result: string[][] = [];

  function dfs(start: number, currentPartition: string[]) {
    if (start === str.length) {
      result.push([...currentPartition]);
      return;
    }

    for (let end = start + 1; end <= str.length; end++) {
      const substring = str.slice(start, end);

      // Only proceed if the substring is a palindrome
      if (isPalindrome(substring)) {
        currentPartition.push(substring); // Add the palindrome substring to the current partition
        dfs(end, currentPartition); // Recurse for the remaining substring
        currentPartition.pop(); // Backtrack: remove the last added substring
      }
    }
  }

  dfs(0, []); // Start DFS with the initial position and an empty partition
  return result;
}

export function isPalindrome(str: string) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 2));
}
