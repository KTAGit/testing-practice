import { capitalize } from "../capitalize";

test("returns the first character of a string capitalized", () => {
  expect(capitalize("coding")).toBe("Coding");
});
