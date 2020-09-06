import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KobukiComponent } from './kobuki.component';

describe('KobukiComponent', () => {
  let component: KobukiComponent;
  let fixture: ComponentFixture<KobukiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KobukiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KobukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
