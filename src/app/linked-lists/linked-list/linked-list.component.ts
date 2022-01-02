import { Component, OnInit } from '@angular/core';
import { LinkedList } from '../../models/LinkedList'


@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent {
  myLinkedList: LinkedList
  addValue
  startValue
  findValue
  found
  removeValue

  constructor() { }

  public makeLinkedList(startVal) {
    this.myLinkedList = new LinkedList(startVal)
    this.startValue = null
  }

  public addLink(value): void {
    this.myLinkedList.addLink(value)
    this.addValue = null
  }

  public removeLink(): void {
    this.myLinkedList.removeLink()
  }

  public findLink(value): void {
    this.found = this.myLinkedList.findLink(value)
  }

  public removeTargetLink(value): void {
    this.found = this.myLinkedList.removeAnywhere(value)
  }

}
