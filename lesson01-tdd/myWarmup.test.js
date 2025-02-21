const { aster, asterFirstLast, asterBox } = require("./mywarmup.js");

test("aster function should return the correct amount of asters represented by given integer", () => {
  const result = aster(5);
  expect(result).toBe("*****");
});

test("aster function should return the correct amount of asters represented by given integer", () => {
  const result = aster(12);
  expect(result).toBe("************");
});

test("aster function should return the correct amount of asters represented by given integer", () => {
  const result = aster(3);
  expect(result).toBe("***");
});

test("asterFirstLast function should return asters as the first index and last index of given integer with the middle elements displayed as spaces", () => {
  const result = asterFirstLast(3);
  expect(result).toBe("* *");
});

test("asterFirstLast function should return asters as the first index and last index of given integer with the middle elements displayed as spaces", () => {
  const result = asterFirstLast(8);
  expect(result).toBe("*      *");
});

test("asterFirstLast function should return asters as the first index and last index of given integer with the middle elements displayed as spaces", () => {
  const result = asterFirstLast(5);
  expect(result).toBe("*   *");
});

test("asterBox function should return a full row of asters for the first and last rows of given integers n rows and m columns. The middle rows should return the first index and last index of given integer with the middle elements displayed as spaces. Each row should start on a new line", () => {
  const result = asterBox(5, 5);
  expect(result).toBe(`*****
*   *
*   *
*   *
*****`);
});

test("asterBox function should return a full row of asters for the first and last rows of given integers n rows and m columns. The middle rows should return the first index and last index of given integer with the middle elements displayed as spaces. Each row should start on a new line", () => {
  const result = asterBox(10, 5);
  expect(result).toBe(`*****
*   *
*   *
*   *
*   *
*   *
*   *
*   *
*   *
*****`);
});

test("asterBox function should return a full row of asters for the first and last rows of given integers n rows and m columns. The middle rows should return the first index and last index of given integer with the middle elements displayed as spaces. Each row should start on a new line", () => {
  const result = asterBox(5, 25);
  expect(result).toBe(`*************************
*                       *
*                       *
*                       *
*************************`);
});
