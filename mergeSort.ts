const mergeSortedArrays = (arr1: number[], arr2: number[]) => {
  let arr = [];
  for (var i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  arr.concat(arr1.slice(i, arr1.length), arr2.slice(j, arr2.length));
  return arr;
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
};

console.log(mergeSort([13, 54, 25, 76, 87]));
