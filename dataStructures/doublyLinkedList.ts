class DLLNode {
  val: any;
  prev: DLLNode | null;
  next: DLLNode | null;
  constructor(val: DLLNode["val"]) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: DLLNode | null;
  tail: DLLNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: DLLNode["val"]) {
    const node = new DLLNode(val);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return null;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      oldTail!.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (this.length === 0) return null;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode!.next;
      this.head!.prev = null;
    }
    shiftedNode!.next = null;
    this.length--;
    return shiftedNode;
  }
  unshift(val: DLLNode["val"]) {
    const newNode = new DLLNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (index < 0 || index > this.length) return null;
    if (index <= this.length / 2) {
      // next
      var current = this.head;
      let count = 0;
      while (count !== index) {
        current = current!.next;
        count++;
      }
    } else {
      // prev
      var current = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        current = current!.prev;
        count--;
      }
    }
    return current;
  }
  set(index: number, val: DLLNode["val"]) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(index: number, val: DLLNode["val"]) {
    if (index < 0 || index > this.length) return false;
    let newNode = new DLLNode(val);
    if (index === 0) return !!this.unshift(newNode);
    if (index === this.length) return !!this.push(newNode);

    let oldNode = this.get(index - 1);
    newNode.next = oldNode!.next;
    newNode.prev = oldNode;
    oldNode!.next!.prev = newNode;
    oldNode!.next = newNode;
    this.length++;
    return true;
  }
  remove(index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let node = this.get(index);
    node!.prev!.next = node!.next;
    node!.next!.prev = node!.prev;
    node!.prev = null;
    node!.next = null;
    this.length--;
    return true;
  }
}

const list = new DoublyLinkedList()
  .push("first")
  .push("second")
  .push("third")
  .push("forth")
  .push("fifth");
console.log(list.remove(1));
console.log(list);
