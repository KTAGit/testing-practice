export function caesarCipher(str, num) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result.push(upperCase(str[i], num));
    } else if (/[a-z]/.test(str[i])) {
      result.push(lowerCase(str[i], num));
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

function upperCase(l, n) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const index = letters.indexOf(l);
  const shift = (index + n) % letters.length;
  return letters[shift];
}

function lowerCase(l, n) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const index = letters.indexOf(l);
  const shift = (index + n) % letters.length;
  return letters[shift];
}
