import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryItemComponent } from './carry-item.component';

describe('CarryItemComponent', () => {
  let component: CarryItemComponent;
  let fixture: ComponentFixture<CarryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
