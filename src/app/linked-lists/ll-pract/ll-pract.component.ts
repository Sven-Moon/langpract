import { Component, OnInit } from '@angular/core';

interface LinkedNode {
  value: any;
  next: LinkedNode;
}

class LinkedList {
  head: LinkedNode;
  length: number;

  constructor(val?: any) {
    this.head = null;
    this.length = 0;
    if (val) { this.addLink(val) }
  }

  addLink(val: any): LinkedList {
    let newNode: LinkedNode = {
      value: val,
      next: this.head
    }
    this.head = newNode
    this.length++

    return this
  }

  removeLink(): LinkedList {
    if (this.length === 0) { return undefined }
    this.head = this.head.next;
    length--;

    return this;
  }

  findLink(val): LinkedNode {
    let node = this.head;

    while (node !== null) {
      if (node.value === val) { return node };
      node = node.next;
    }

    return node;
  }

  removeNode(val): LinkedList {
    let prev: LinkedNode;
    let node: LinkedNode = this.head;

    if (node.value === val) {
      this.head = node.next;
      this.length--
      console.log('Removed node: ');
      console.log(node);
      return this;
    } else {
      prev = node;
      node = node.next;
    };
    while (node !== null) {
      if (node.value === val) {
        prev.next = node.next;
        console.log('Removed node: ');
        console.log(node);
        this.length--

        return this
      } else {
        prev = node;
        node = node.next;
      }
    }
    console.log(`Node with value ${val} not found.`)
    return this

  }
}



@Component({
  selector: 'app-ll-pract',
  templateUrl: './ll-pract.component.html',
  styleUrls: ['./ll-pract.component.css']
})
export class LlPractComponent implements OnInit {
  list: LinkedList;
  addValue: any;
  startVal;
  // found: Found = {};
  remValue;
  findVal;
  testList: LinkedList;
  foundNode: LinkedNode = null;
  kth: number;


  constructor() { }

  ngOnInit(): void {
  }

  public newList(val): void {
    this.list = new LinkedList(val);
    this.startVal = null;
  }

  public addLink(val): void {
    this.list.addLink(val);
    this.addValue = null;
  }

  public removeLink(): void {
    this.list.removeLink();
  }

  public findNode(val): void {
    this.foundNode = this.list.findLink(val)
  }

  public removeNode(val): void {
    this.list = this.list.removeNode(val)
    this.remValue = null
  }

}
