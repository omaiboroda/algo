class StackNode {
  val: any;
  next: StackNode | null;
  constructor(val: StackNode["val"]) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  first: StackNode | null;
  last: StackNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val: StackNode["val"]) {
    const node = new StackNode(val);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return false;
    const node = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }
    node!.next = null;
    this.length--;
    return node;
  }
}

const stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
// BIG O
// Insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)
