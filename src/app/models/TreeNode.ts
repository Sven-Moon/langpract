class TreeNode<T> {
  private key: T;
  private leftChild?: TreeNode<T>;
  private rightChild?: TreeNode<T>;

  constructor(key: T) {
    this.key = key;
  }

  getKey = (): T => this.key;
  getLeftChild = (): TreeNode<T> => this.leftChild
  getRightChild = (): TreeNode<T> => this.rightChild
  setLeftChild = (leftNode: TreeNode<T>) => this.leftChild = leftNode
  setRightChild = (leftNode: TreeNode<T>) => this.rightChild = leftNode

}
