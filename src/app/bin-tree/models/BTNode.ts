export class BTNode {
  value: any;
  left: BTNode;
  right: BTNode;
  constructor(val) {
    this.value = val
  }
}

export interface btNode {
  value: any;
  left: BTNode;
  right: BTNode;
}
export interface btTree {
  value: any;
  left: btNode;
  right: btNode;
}

export class BinaryTree {
  array: Array<any>
  root: BTNode;
  constructor(arr: Array<any>) {
    this.array
    this.makeTree(arr, 0, arr.length - 1);
  }

  private makeTree(arr: Array<any>, low: number, high: number): BTNode {
    if (low < high) { return null }
    let mid = Math.floor((low + high) / 2);
    let node: BTNode = (arr[mid])
    node.left = this.makeTree(arr, low, mid - 1);
    node.right = this.makeTree(arr, mid + 1, high);
    return node
  }

}
