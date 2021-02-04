const swap = (array: any[], i: number, j: number) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// 0. puts the largest value to the end
// 1. i,j start from beginning
// 3. check and swap every time
// 4. j shouldn't iterate over sorted numbers in the end
// 5. swapped boolen to know if last iteration did any sort
const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    var swapped = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swapItems(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
};
// console.log(bubbleSort([99,77,5,1,23,81,4,1, 12, 1 ,3,4]));

// 0. puts the smallest value to the beginning
// 1. j starts from i+1
// 2. find minimum value
// 3. always swap
// 4. unless i===min
const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swapItems(array, i, min);
    }
  }
  return array;
};

// console.log(selectionSort([99,77,5,1,23,81,4,1, 12, 1 ,3,4]));

// 1. sort left part of array
// 2. start from 1
// 2.1 store value of i
// 3. go leftwards with j until position is found
// 4. shift numbers
// 5. place j
const insertionSort = (array: number[]) => {
  for (var i = 1; i < array.length; i++) {
    const current = array[i];
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return array;
};

console.log(insertionSort([99, 77, 5, 1, 23, 81, 4, 1, 12, 1, 3, 4]));
