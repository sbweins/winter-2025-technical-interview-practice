const sumFunction = require("./sumFunction");

// 1. Red: Write a failing test

// ```javascript
// // Failing test for sum function
// test("sum function should return the correct sum of two numbers", () => {
//   const result = sum(2, 3);
//   expect(result).toBe(5);
// });
// ```

// 2. Green: Write the minimal code to make the test pass
// 3. Refactor: Improve the code while keeping tests green

test("sum function should return the correct sum of two numbers", () => {
  const result = sumFunction(1, 1);
  expect(result).toBe(2);
});
