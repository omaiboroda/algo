const swapF = (arr: any[], index1: number, index2: number) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let value = this.values[index];
    while (true) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];
      if (parentValue < value) {
        swapF(this.values, parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  insert(val: any) {
    this.values.push(val);
    this.bubbleUp();
  }
  extractMax() {
    if (this.values.length === 1) return this.values.pop();
    swapF(this.values, 0, this.values.length - 1);
    const root = this.values.pop();
    this.sinkDown();
    return root;
  }
  sinkDown() {
    let idx = 0;
    while (true) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
      let swap = null;
      if (leftChildIdx < this.values.length) {
        if (this.values[leftChildIdx] > this.values[idx]) {
          swap = leftChildIdx;
        }
      }
      if (leftChildIdx < this.values.length) {
        if (
          (swap === null && this.values[rightChildIdx] > this.values[idx]) ||
          (swap !== null &&
            this.values[rightChildIdx] > this.values[leftChildIdx])
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      swapF(this.values, idx, swap);
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(7878);
console.log(heap);

//    11
// 05   23

//    11
// 54   23
