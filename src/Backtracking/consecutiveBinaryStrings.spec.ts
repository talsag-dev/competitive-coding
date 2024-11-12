import generateBinaryStrings from "./consecutiveBinaryStrings";

describe("consecutiveBinaryStrings", () => {
  it("should be defined", () => {
    expect(generateBinaryStrings).toBeDefined();
  });

  it("should return all the permutations for n=3 without consecutive 11", () => {
    const n = 3;
    const result = generateBinaryStrings(4);
    expect(result).toEqual([
      "0000",
      "0001",
      "0010",
      "0100",
      "0101",
      "1000",
      "1001",
      "1010",
    ]);
  });
});
