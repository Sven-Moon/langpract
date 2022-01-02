
export class LinkedList {
  length: number;
  head: ListNode
  constructor(value) {
    this.length = 0;
    this.head = null;
    this.addLink(value);
  }

  addLink(value) {
    const newNode = {
      value: value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  removeLink() {
    if (this.length === 0) {
      return undefined
    };
    this.head = this.head.next;
    this.length--;
    return this;
  }

  findLink(val: any): ListNode {
    let node = this.head;
    // go through each node, check if value = val
    while (node) {
      return node.value === val
        ? node  // if true, return the node
        : node = node.next // if not set the node to the next node
      // so the next time through it check that one

    };
    // if never found, return the null value node.next
    // except the next node will be null, so should be this
    return node // node === null
  }

  removeAnywhere(val) {

    // handle head node separately
    if (this.head.value === val) {
      this.removeLink();
      return this;
    }
    let prevNode: ListNode = this.head
    let node = this.head.next;
    // if first item, prevNode must be head
    // go through each node,
    // until either end reached for node is found
    while (node) {
      // check if value = val
      if (node.value === val) {
        // after found set the next node to the previous node
        // a -> b -> c
        //      a -> c  ... b lost in space
        prevNode.next = node.next
        this.length--
        // return the whole list
        return this.head
      } else {
        // only if not found, set the previous node to current
        prevNode = node
        // and set the current node to the next
        node = node.next // if not set the node to the next node
      }
    };
    // if never found, return the null value node.next
    // except the next node will be null, so should be this
    return node // node === null
  }

}

class ListNode {
  value: any
  next: ListNode
}

