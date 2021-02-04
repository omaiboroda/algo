function binarySearch<T extends number[]>(array: T, value: keyof T) {
  var start = 0;
  var end = array.length - 1;
  var pointer = Math.ceil((start + end) / 2);
  while (value !== array[pointer]) {
    if (start === end) return -1;

    if (value > array[pointer]) {
      start = pointer;
      pointer = Math.ceil((start + end) / 2);
    } else {
      end = pointer;
      pointer = Math.floor((start + end) / 2);
    }
  }
  return pointer;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));
