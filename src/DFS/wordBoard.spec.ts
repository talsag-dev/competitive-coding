import findWordInBoard from "./wordBoard";

describe("wordBoard", () => {
  it("should be defined", () => {
    expect(findWordInBoard).toBeDefined();
  });

  it("test case 1", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCCED";
    const result = findWordInBoard(board, word);
    expect(result).toBe(true);
  });
});
