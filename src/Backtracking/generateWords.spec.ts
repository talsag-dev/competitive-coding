import generateWords from "./generateWords";

describe("generateWords", () => {
  it("should be defined", () => {
    expect(generateWords).toBeDefined();
  });

  it("should find all the combinations of xyz when n = 2", () => {
    const n = 2;
    const result = generateWords(n);

    expect(result).toEqual([
      "xx",
      "xy",
      "xz",
      "yx",
      "yy",
      "yz",
      "zx",
      "zy",
      "zz",
    ]);
  });
});
