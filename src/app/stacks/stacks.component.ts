import { Component, OnInit } from '@angular/core';
import { Queue } from './Queue';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  thing = { 1: 0, 2: 0, 3: 0 }

  queue = new Queue<string>();

}
