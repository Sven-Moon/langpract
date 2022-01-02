import { Queue } from "../stacks/Queue";

class BinaryTree<H> {
  private rootNode: TreeNode<H>;

  setRoot = (node: TreeNode<H>) => this.rootNode = node

  addNode = (key: H): void => {
    this.rootNode = this.addNodeByRecursion(this.rootNode, key);
  }

  addNodeByRecursion = (currentNode: TreeNode<H>, key: H) => {
    if (currentNode === null) {
      return new TreeNode<H>(key);
    }
    if (key < currentNode.getKey()) {
      currentNode.setLeftChild(this.addNodeByRecursion(currentNode.getLeftChild(), key));
    } else if (key > currentNode.getKey()) {
      currentNode.setRightChild(this.addNodeByRecursion(currentNode.getRightChild(), key));
    }
    return currentNode
  }

  public levelOrderTraversal(from?: number) {
    if (this.rootNode == null) {
      return;
    }
    let nodes: Queue<TreeNode<H>> = new Queue<TreeNode<H>>();
    nodes.enqueue(this.rootNode);
    while (!nodes.isEmpty()) {
      let currentNode: TreeNode<H> = nodes.dequeue();
      console.log("key is:" + currentNode.getKey());
      if (currentNode.getLeftChild() != null) {
        nodes.enqueue(currentNode.getLeftChild());
      }
      if (currentNode.getRightChild() != null) {
        nodes.enqueue(currentNode.getRightChild());
      }
    }

  }
}
