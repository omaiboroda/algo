const countUniqueValues = (arr: number[]) => {
  if (arr.length === 0) return 0;
  let j = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[j]) {
      arr[j + 1] = arr[i];
      j++;
    }
  }
  return j;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 1, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
