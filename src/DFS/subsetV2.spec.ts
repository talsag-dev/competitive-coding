import subsetV2 from "./subsetV2";

describe("subsetV2", () => {
  it("should be defined", () => {
    expect(subsetV2).toBeDefined();
  });

  it("should find all the subsets of a given array without duplicates", () => {
    const nums = [1, 2, 2];

    const result = subsetV2(nums);
    expect(result).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
  });
});
