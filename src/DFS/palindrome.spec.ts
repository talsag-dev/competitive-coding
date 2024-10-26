import allPalindromeSubsets, { isPalindrome } from "./palindrome";

describe("palindrome", () => {
  it("should be defined", () => {
    expect(allPalindromeSubsets).toBeDefined();
  });

  it("should find out if the string is palindrome or not ", () => {
    const palindrome = ["aa", "a", "aaa", "abba"];
    const notPalindrome = ["ab", "aab", "abab"];

    expect(
      palindrome.map((pal) => isPalindrome(pal)).every((bol) => bol === true)
    ).toBe(true);

    expect(
      notPalindrome
        .map((pal) => isPalindrome(pal))
        .every((bol) => bol === false)
    ).toBe(true);
  });

  it("should find out all the palindrome subsets", () => {
    const str = "aab";
    const result = allPalindromeSubsets(str);
    expect(result).toEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });
});
