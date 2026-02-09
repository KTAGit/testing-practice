import { calculator } from "../calculator";

describe("calculates basic operations", () => {
  test("adds two numbers", () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(5, 10)).toBe(50);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("throws when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow();
  });
});
