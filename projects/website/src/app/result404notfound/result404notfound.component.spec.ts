import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Result404notfoundComponent } from './result404notfound.component';

describe('Result404notfoundComponent', () => {
  let component: Result404notfoundComponent;
  let fixture: ComponentFixture<Result404notfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Result404notfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Result404notfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
