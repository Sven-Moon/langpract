import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort-pure',
  templateUrl: './merge-sort-pure.component.html',
  styleUrls: ['./merge-sort-pure.component.css']
})
export class MergeSortPureComponent implements OnInit {
  array
  constructor() { }

  ngOnInit(): void {
    this.array = [45, 97, 32, 13, 58, 33, 87, 21, 9, 62, 58]
    this.array = this.mergeSort(this.array)
  }

  public mergeSort(arr): Array<any> {
    let array = [...arr]
    this.splitSort(array, 0, array.length - 1)
    return array
  }

  public splitSort(arr: Array<any>, low: number, high: number): void {
    if (low < high) {
      let middle = Math.floor((low + high) / 2)
      this.splitSort(arr, low, middle)
      this.splitSort(arr, middle + 1, high)
      this.merge(arr, low, middle, high)
    }
  }

  private merge(arr: Array<any>, low: number, middle: number, high: number): void {
    let help = []
    for (let i = low; i <= high; i++) {
      help[i] = arr[i]
    }

    let left = low
    let right = middle + 1;
    let current = low;

    while (left <= middle && right <= high) {
      if (help[left] <= help[right]) {
        arr[current] = help[left]
        left++
      } else { // right < left
        arr[current] = help[right]
        right++
      }
      current++
    }

    let remaining = middle - left
    for (let i = 0; i <= remaining; i++) {
      arr[current + i] = help[left + i]
    }
  }
}
