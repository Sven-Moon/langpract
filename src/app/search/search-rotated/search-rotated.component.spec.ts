import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRotatedComponent } from './search-rotated.component';

describe('SearchRotatedComponent', () => {
  let component: SearchRotatedComponent;
  let fixture: ComponentFixture<SearchRotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRotatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
