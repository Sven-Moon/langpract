import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should find a number in the array', () => {
    let array = [-20, -3, 0, 1, 7, 10, 12, 15];
    let searchValue = 7;
    var result: number = component.search(array, searchValue);
    var expectedResult: number = 4;
    let isItRight = result === expectedResult
    expect(isItRight).toBeTruthy
      ();
  });

  it('should not find a number not in the array', () => {
    let array = [-20, -3, 0, 1, 7, 10, 12, 15];
    let searchValue = 8;
    var result: number = component.search(array, searchValue);
    var expectedResult: number = -1;
    let isItRight = result === expectedResult
    expect(isItRight).toBeTruthy
      ();
  });

  it('should find a string in a string array', () => {
    let array = ["pig", "walrus", "sheep", "cow"];
    let searchValue = "cow";
    var result: number = component.search(array, searchValue);
    var expectedResult: number = 3;
    let isItRight = result === expectedResult
    expect(isItRight).toBeTruthy
      ();
  });
});
