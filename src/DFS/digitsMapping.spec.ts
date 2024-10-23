import digitsMapping from "./digitsMapping";

describe("digitsMapping", () => {
  it("should be defined", () => {
    expect(digitsMapping).toBeTruthy();
  });
  it("should map digits based on mapping", () => {
    const digits = "23";
    const result = digitsMapping(digits);
    expect(result).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });
});
