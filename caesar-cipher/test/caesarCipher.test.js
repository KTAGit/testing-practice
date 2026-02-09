import { caesarCipher } from "../caesarCipher";

test("returns each character in a string shifted", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
