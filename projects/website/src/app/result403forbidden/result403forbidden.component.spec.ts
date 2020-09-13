import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Result403forbiddenComponent } from './result403forbidden.component';

describe('Result403forbiddenComponent', () => {
  let component: Result403forbiddenComponent;
  let fixture: ComponentFixture<Result403forbiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Result403forbiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Result403forbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
