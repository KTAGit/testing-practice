export function analyzeArray(arr) {
  const length = arr.length;
  const average = arr.reduce((acc, num) => acc + num, 0) / length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { average: average, min: min, max: max, length: length };
}
