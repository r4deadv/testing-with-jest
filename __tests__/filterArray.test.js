const filterArray = require("../src/filterArray");

describe("filterArray", () => {
  it("will return null if null is passed", () => {
    const results = filterArray(null);
    expect(results).toBeNull();
  });

  it("will return all numbers lower than 100", () => {
    const mockArray = [1, 2, 3, 4];
    const results = filterArray(mockArray);
    expect(results.length).toEqual(mockArray.length);
    expect(results[0]).toEqual(mockArray[0]);
    expect(results[1]).toEqual(mockArray[1]);
    expect(results[2]).toEqual(mockArray[2]);
    expect(results[3]).toEqual(mockArray[3]);
  });

  it("will not return any numbers greater than 100.", () => {
    const mockArray = [50, 75, 100, 125];
    const results = filterArray(mockArray);
    expect(results).not.toContain(125);
  });
});
