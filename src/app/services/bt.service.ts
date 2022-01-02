import { Injectable } from '@angular/core';
import { btNode, btTree } from '../bin-tree/models/BTNode';

@Injectable({
  providedIn: 'root'
})
export class BtService {

  constructor() { }

  public generateTree(array: any[]): btTree {
    return this.generate(array, 0, array.length - 1)
  }

  private generate(array: any[], low, high): btTree {
    if (low > high) { return null }
    let mid = Math.ceil((low + high) / 2);
    let node: btNode = {
      value: null,
      left: null,
      right: null
    };
    node.value = array[mid];
    node.left = this.generate(array, low, mid - 1);
    node.right = this.generate(array, mid + 1, high);

    return node;
  }
}
