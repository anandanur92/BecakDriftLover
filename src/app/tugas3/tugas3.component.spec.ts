import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tugas3Component } from './tugas3.component';

describe('Tugas3Component', () => {
  let component: Tugas3Component;
  let fixture: ComponentFixture<Tugas3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tugas3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tugas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
