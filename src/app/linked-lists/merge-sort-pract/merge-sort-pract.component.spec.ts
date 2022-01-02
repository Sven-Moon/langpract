import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortPractComponent } from './merge-sort-pract.component';

describe('MergeSortPractComponent', () => {
  let component: MergeSortPractComponent;
  let fixture: ComponentFixture<MergeSortPractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeSortPractComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('will sort an array properly', () => {
    let testArray: Array<any> = [8, 9, 2, 4, 2, 9, 7, 1]
    let expectedResult = [1, 2, 2, 4, 7, 8, 9, 9]
    var result = component.mergeSort(testArray)
    expect(result).toEqual(expectedResult)
  });

  it('will return an empty array when an empty array is passed', () => {
    let testArray: Array<any> = [];
    let expectedResult = [];
    var result: Array<any> = component.mergeSort(testArray);
    expect(result).toEqual(expectedResult);
  })

  it('will do something when weird input is passed', () => {
    let testArray: Array<any> = ['!!', '&&&,', 3234, 'abc'];
    let expectedResult = ['!!', '&&&,', 'abc', 3234];
    var result: Array<any> = component.mergeSort(testArray);
    expect(result).toEqual(expectedResult);
  })

  it('will sort the array properly with negative input values', () => {
    let testArray: Array<any> = [8, 9, -2, 4, 2, 9, -7, 1];
    let expectedResult = [-7, -2, 1, 2, 4, 8, 9, 9];
    var result: Array<any> = component.mergeSort(testArray);
    expect(result).toEqual(expectedResult);
  })

  it('will sort the array properly with zeroes input values', () => {
    let testArray: Array<any> = [8, 9, -2, 0, 2, 9, -7, 1];
    let expectedResult = [-7, -2, 0, 1, 2, 8, 9, 9];
    var result: Array<any> = component.mergeSort(testArray);
    expect(result).toEqual(expectedResult);
  })
});
