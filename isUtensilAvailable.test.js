const isUtensilAvailable = require("./isUtensilAvailable");

describe("isUtensilAvailable", () => {
  it("will return true if the utensil is found", async () => {
    const utensil = "fork";
    const result = await isUtensilAvailable(utensil);
    expect(result).toEqual(true);
  });

  it("will return an error if the utensil is not found", async () => {
    const invalidUtensil = "tree";
    await expect(isUtensilAvailable(invalidUtensil)).rejects.toEqual(
      "No utensils found."
    );
  });
});
