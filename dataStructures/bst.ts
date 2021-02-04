type Val = number;

class BSTNode {
  val: Val;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: BSTNode | null;
  constructor() {
    this.root = null;
  }
  insert(val: Val) {
    const node = new BSTNode(val);
    if (!this.root) return (this.root = node);
    let current = this.root;
    while (true) {
      if (current.val < node.val) {
        if (!current.right) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      }
    }
  }
  find(val: Val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (current.val === val) return true;
      if (val > current.val) {
        if (!current.right) return false;
        current = current.right;
      } else {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }
  bfs() {
    const queue = [this.root];
    const nodes = [];
    while (queue.length) {
      const node = queue.shift();
      if (node?.left) queue.push(node?.left);
      if (node?.right) queue.push(node?.right);
      nodes.push(node?.val);
    }
    return nodes;
  }
  dfs() {
    if (this.root === null) return;
    const nodes: BSTNode["val"][] = [];
    const traverse = (node: BSTNode) => {
      nodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return nodes;
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(8);
bst.insert(14);
console.log(bst.dfs());
