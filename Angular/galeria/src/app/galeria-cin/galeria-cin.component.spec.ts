import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCinComponent } from './galeria-cin.component';

describe('GaleriaCinComponent', () => {
  let component: GaleriaCinComponent;
  let fixture: ComponentFixture<GaleriaCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
