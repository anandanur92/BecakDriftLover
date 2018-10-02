import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMahasiswaComponent } from './data-mahasiswa.component';

describe('DataMahasiswaComponent', () => {
  let component: DataMahasiswaComponent;
  let fixture: ComponentFixture<DataMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
