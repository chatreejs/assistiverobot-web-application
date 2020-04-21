import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEyeComponent } from './display-eye.component';

describe('DisplayEyeComponent', () => {
  let component: DisplayEyeComponent;
  let fixture: ComponentFixture<DisplayEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
