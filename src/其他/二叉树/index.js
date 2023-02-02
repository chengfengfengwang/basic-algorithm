class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (key < node.key) { // 插入节点小于当前节点，应该往左插
      if (node.left === null) { // 当前节点左子树为空
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else { // 插入节点大于当前节点，应该往右插
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    } 
  }
  inOrderTraverse(callback) { // 先序遍历
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTrsverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTrsverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTrsverseNode(node.right, callback);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);

console.log(tree)