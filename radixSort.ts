const getDigit = (num: number, i: number) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num: number) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums: number[]) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (arr: number[]) => {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    const buckets: number[][] = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < arr.length; i++) {
      const dig = getDigit(arr[i], k);
      buckets[dig].push(arr[i]);
    }
    arr = buckets.reduce((cur, val) => [...cur, ...val], []);
  }
  return arr;
};

console.log(radixSort([5, 1, 342, 21, 55, 453, 3]));
