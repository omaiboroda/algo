class QNode {
  val: any;
  next: QNode | null;
  constructor(val: QNode["val"]) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  first: QNode | null;
  last: QNode | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val: QNode["val"]) {
    const node = new QNode(val);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last!.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return null;
    const node = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }
    node!.next = null;
    return node!.val;
  }
}

const newQueue = new Queue();
newQueue.enqueue("TASK1");
newQueue.enqueue("TASK2");
newQueue.enqueue("TASK3");
console.log(newQueue.dequeue());
// BIG O
// Insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)
