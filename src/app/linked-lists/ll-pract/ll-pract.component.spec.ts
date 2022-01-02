import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlPractComponent } from './ll-pract.component';

describe('LlPractComponent', () => {
  let component: LlPractComponent;
  let fixture: ComponentFixture<LlPractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlPractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
