import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {
  array
  constructor() { }

  ngOnInit(): void {
    this.array = [7, 3, 2, 5, 4]
    console.log('array start:')
    console.log(this.array)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
    this.mergeSort(0, this.array.length - 1)
  }

  public mergeSort(low: number, high: number): void {
    if (low < high) {
      let middle = Math.floor((low + high) / 2)
      this.mergeSort(low, middle)
      this.mergeSort(middle + 1, high)
      this.merge(low, middle, high)
    }
  }

  private merge(low: number, middle: number, high: number): void {
    var help = []
    for (let i = low; i <= high; i++) {
      help[i] = this.array[i]
    }
    console.log('helper array: [low (l) ... high (h)]');
    console.log(help);

    let left = low
    let right = middle + 1;
    let current = low;

    // compare the right array to the left, element by element
    // start at the last element on the left
    console.log(`while
    L(${left}) <.= m(${middle}) (${left <= middle})
    & R(${right}) <.= h(${high})  (${right <= high})`)
    while (left <= middle && right <= high) {
      if (help[left] <= help[right]) {
        this.array[current] = help[left]
        console.log(`helper key: [L(l) / R(m+1)] ... l:${low} m:${middle} h:${high}`);
        console.log(`helper L/R: [${help[left]} / ${help[right]}]`);
        console.log(
          `L:(${help[left]}) vs R: (${help[right]}):
          arr[curr(${current})] = L:${help[left]}
          arr[${current}] = ${this.array[current]} (check)`)
        left++
        console.log(`L++ = ${left}`)
      } else { // right < left
        this.array[current] = help[right]
        console.log(
          `L: ${help[left]} vs R: ${help[right]} :
          arr[cur(${current})] = R:${help[right]} `)
        right++
        console.log('R++ = ' + right);
      }
      current++
      console.log('curr++ = ' + current);
      console.log('--------------------');
      console.log(this.array);
    }
    console.log(`exit comparative sort (while):
    L(${left}) <.= m(${middle}) (${left <= middle})
    R(${right}) <.= h(${high}) (${right <= high})`)

    let remaining = middle - left
    console.log(`rem(${remaining}) = m(${middle}) - L(${left})`)
    let i_report = 0
    for (let i = 0; i <= remaining; i++) {
      console.log(`array[curr(${current}) + i(${i}) (${current + i})] = help[L(${left}) + i(${i}) (${left + i})](${this.array[current + i]} -> ${help[left + i]})`)
      this.array[current + i] = help[left + i]
      console.log(` array[${current + i}] = ${this.array[current + i]} (check)`)
      i_report++
    }
    console.log(`exit fill: i(${i_report}) <.= rem(${remaining})`)
    console.log('--------------------');
    console.log(this.array);
    console.log('--------------------');
    console.log('--------------------');

  }

}
