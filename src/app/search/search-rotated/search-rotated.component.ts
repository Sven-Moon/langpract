import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-rotated',
  templateUrl: './search-rotated.component.html',
  styleUrls: ['./search-rotated.component.css']
})
export class SearchRotatedComponent implements OnInit {
  testArray
  target
  result

  constructor() { }
  ngOnInit() {
    this.testArray = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
    this.target = 5
    this.result = this.search(this.testArray, this.target)
    console.log(this.result)
  }
  /**
   * search
   * Takes in a sorted array, returns the index of the sought value
   */
  public search(arr: Array<any>, v): number {
    let l = 0;
    let h = arr.length
    return this.compareValues(arr, v, 0, arr.length)
  }

  private compareValues(arr, v, l, h): number {
    if (l > h) { return -1 }
    // find the middle value
    let m = Math.floor((l + h) / 2)
    // if it's less than the value at the middle index,
    // call the method on the lower half
    if (arr[m] < v) {
      return this.compareValues(arr, v, l, m - 1)
    }
    // if it's greater than the value at the middle index,
    // call the method on the upper half
    else {
      if (arr[m] > v) {
        return this.compareValues(arr, v, m + 1, h)
      }
      // if it's the value at the middle index, return m
      else return m
    }
  }

}
