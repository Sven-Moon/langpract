import { Component, OnInit } from '@angular/core';
import { BtService } from 'src/app/services/bt.service';
import { BinaryTree, btTree } from '../models/BTNode';

@Component({
  selector: 'app-bt-model',
  templateUrl: './bt-model.component.html',
  styleUrls: ['./bt-model.component.css']
})
export class BtModelComponent implements OnInit {
  sortedArray: Array<any>
  binTree: btTree
  constructor(
    private btService: BtService
  ) { }

  ngOnInit(): void {
    this.sortedArray = [15, 21, 33, 65, 122, 231, 458, 792, 923]
    this.binTree = this.btService.generateTree(this.sortedArray)
    console.log('binary tree: ')
    console.log(this.binTree)
  }




}
