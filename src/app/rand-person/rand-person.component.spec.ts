import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandPersonComponent } from './rand-person.component';

xdescribe('RandPersonComponent', () => {
  let component: RandPersonComponent;
  let fixture: ComponentFixture<RandPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandPersonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
