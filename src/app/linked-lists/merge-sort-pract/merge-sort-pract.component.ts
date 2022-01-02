import { Component, OnInit } from '@angular/core';
import * as assert from 'assert';
import { Assert } from '../../models/Assert';

@Component({
  selector: 'app-merge-sort-pract',
  templateUrl: './merge-sort-pract.component.html',
  styleUrls: ['./merge-sort-pract.component.css']
})
export class MergeSortPractComponent implements OnInit {
  array: Array<any>
  sortedArray: Array<any>
  test

  public ngOnInit() {
    this.array = [8, 9, 2, 4, 2, 9, 7, 1]
    this.sortedArray = this.mergeSort(this.array)
    this.test = this.assert(this.sortedArray, [1, 2, 3, 4, 7, 8, 9, 9])

    console.log(this.test)
  }

  public mergeSort(arr) {
    let high, low: number;
    let array: Array<any> = arr;
    high = arr.length - 1;
    low = 0;

    this.sortMerge(arr, low, high);
    return array;
  }

  private sortMerge(arr, l, h) {
    let Middle: number;
    // if the array length is greater than 1 (by l/h reference)
    if (l < h) {
      // recursively split the array
      Middle = Math.floor((l + h) / 2)
      this.sortMerge(arr, l, Middle)
      this.sortMerge(arr, Middle + 1, h)
      // then merge them in order
      this.merge(arr, l, Middle, h)
    };
  }

  private merge(arr, l, M, h) {
    // make a helper array to keep the variables as they are
    // overwritten in the mutated array
    let helper = []
    for (let i = l; i <= h; i++) {
      helper[i] = arr[i]
    }
    // define moving variables
    // [Left/low/current ... Middle] [Right ... high]
    let L, R, c: number;
    L = l;
    R = M + 1;
    c = l;

    /**
     * take the smaller of the L/R array until one array is
     * exhausted.
     * Exhausted when either L beyond M or R beyond h
     */

    while (L <= M && R <= h) {
      if (helper[L] <= helper[R]) {
        arr[c] = helper[L];
        L++;
      } else { // R < L
        arr[c] = helper[R];
        R++;
      }
      c++
    }

    /**
     * left side must be filled in if R completes first
     * if L < M,  R  finished first
     */
    while (L <= M) {
      arr[c] = helper[L];
      L++;
      c++;
    }
    // let rem = L - c
    // for (let i = 0; i < rem; i++) {
    //   arr[c + i] = arr[L + i]
    // }
  }


  public assert(inputFn, eV: Array<any>): boolean {
    console.log('input: ');
    console.log(inputFn);
    console.log('eV: ');
    console.log(eV);

    return inputFn == eV
      ? true
      : false
  }
}
