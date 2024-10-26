import combinationSum from "./combinationSumV3";

describe("combinationSumV3", () => {
  it("should be defined", () => {
    expect(combinationSum).toBeDefined();
  });
  it("test case 1", () => {
    const k = 3;
    const n = 7;
    const result = combinationSum(k, n);
    expect(result).toStrictEqual([[1, 2, 4]]);
  });
});
