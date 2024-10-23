import combinationSumV2 from "./combinationSumV2";

describe("currSumV2", () => {
  it("should be defined", () => {
    expect(combinationSumV2).toBeDefined();
  });

  it("should find combinations but without duplicates ", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;

    const result = combinationSumV2(candidates, target);

    expect(result).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
  });
});
