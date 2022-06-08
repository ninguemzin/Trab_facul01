import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarropageComponent } from './carropage.component';

describe('CarropageComponent', () => {
  let component: CarropageComponent;
  let fixture: ComponentFixture<CarropageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarropageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
