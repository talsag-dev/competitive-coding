import solveNQueens from "./nQueens";

describe("nQueens", () => {
  it("should be defined", () => {
    expect(solveNQueens).toBeDefined();
  });

  it("should find all possible solutions for n=4", () => {
    const n = 4;
    const result = solveNQueens(n);
    expect(result).toEqual([
      [".Q..", "...Q", "Q...", "..Q."],
      ["..Q.", "Q...", "...Q", ".Q.."],
    ]);
  });
});
