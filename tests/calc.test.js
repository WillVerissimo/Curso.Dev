const calculator = require("../models/calc.js");

test("2 + 2 should be 4", () => {
  const result = calculator.add(2, 2);
  console.log(result);
  expect(result).toBe(4);
});

test("5 + 100 should be 105", () => {
  const result = calculator.add(5, 100);
  console.log(result);
  expect(result).toBe(105);
});

test("'banana' + 100 should be 'Error'", () => {
  const result = calculator.add("banana", 100);
  console.log(result);
  expect(result).toBe("Error");
});

test("10 / 10 should be 1", () => {
  const result = calculator.divide(10, 10);
  console.log(result);
  expect(result).toBe(1);
});

test("2999 / 0 should be 0", () => {
  const result = calculator.divide(2999, 0);
  console.log(result);
  expect(result).toBe(0);
});
