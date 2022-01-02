import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oop1Component } from './oop1.component';

describe('Oop1Component', () => {
  let component: Oop1Component;
  let fixture: ComponentFixture<Oop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oop1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
