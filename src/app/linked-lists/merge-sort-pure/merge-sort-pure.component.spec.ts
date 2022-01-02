import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortPureComponent } from './merge-sort-pure.component';

xdescribe('MergeSortPureComponent', () => {
  let component: MergeSortPureComponent;
  let fixture: ComponentFixture<MergeSortPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeSortPureComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
