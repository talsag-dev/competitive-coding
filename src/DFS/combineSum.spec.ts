import combineSum from "./combineSum";

describe("combineSum ", () => {
  it("combineSum should be defined", () => {
    expect(combineSum).toBeDefined();
  });

  it("should get a number array and a target and make a combination of numbers that sum up to the target", () => {
    const nums = [2, 3, 6, 7];
    const target = 7;
    const result = combineSum(nums, target);
    expect(result).toStrictEqual([[2, 2, 3], [7]]);
  });
});
