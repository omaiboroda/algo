const swapItems = (array: number[], i: number, j: number) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const pivot = (arr: number[], start = 0, end = arr.length - 1) => {
  let pivotValue = arr[start];
  let pivotIndex = start;
  for (let i = pivotIndex + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      swapItems(arr, i, pivotIndex);
    }
  }
  swapItems(arr, start, pivotIndex);
  return pivotIndex;
};

const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([3, 4, 1, 54, 12, 7]));
