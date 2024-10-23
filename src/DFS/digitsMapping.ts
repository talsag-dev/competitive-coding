const MAPPING = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

/**
 * Description: Given a string containing digits from 2-9 (inclusive),
 * return all possible letter combinations that the number could represent.
 * The mapping of digits to letters is the same as on a telephone keypad.
 *
Example:
Input: digits = "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

Constraints:
- The input digits will be a non-empty string.
- The digits will only include values from 2 to 9.
 */
export default function digitsMapping(digits: string) {
  const result: string[] = [];

  if (digits.length === 0) {
    return result;
  }

  function dfs(index: number, currentCombination: string) {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    const letters = MAPPING[digits[index] as unknown as keyof typeof MAPPING];

    for (let letter of letters) {
      dfs(index + 1, currentCombination + letter);
    }
  }

  dfs(0, "");

  return result;
}
