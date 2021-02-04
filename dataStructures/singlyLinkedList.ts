class SLLNode {
  val: any;
  next: StackNode | null;
  constructor(val: SLLNode["val"]) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SLLNode | null;
  tail: SLLNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: SLLNode["val"]) {
    const node = new SLLNode(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return null;
    const element = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let current = this.head;
      let newTail = current;
      while (current!.next) {
        newTail = current;
        current = current!.next;
      }
      this.tail = newTail;
    }
    this.length--;
    return element;
  }
  shift() {
    if (this.length === 0) return null;
    const element = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head!.next;
    }
    this.length--;
    return element;
  }
  unshift(val: SLLNode["val"]) {
    const node = new SLLNode(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (index < 0 || index > this.length) return null;
    let current = 0;
    let node = this.head;
    while (current < index) {
      current++;
      node = node!.next;
    }
    return node;
  }
  reverse() {
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let cur = this.tail;
    let prev = null;
    while (cur) {
      const oldNext = cur.next;
      cur.next = prev;
      prev = cur;
      cur = oldNext;
    }
    return this;
  }
}

const sllList = new SinglyLinkedList();
sllList.push("First").push("Second").push("third");
console.log(sllList.reverse());

// first -> second -> third
// first.next = null
// prev = first            prev = second
// cur.next = prev         cur.next = prev
