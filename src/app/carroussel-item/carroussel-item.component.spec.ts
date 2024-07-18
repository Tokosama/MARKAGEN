import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousselItemComponent } from './carroussel-item.component';

describe('CarrousselItemComponent', () => {
  let component: CarrousselItemComponent;
  let fixture: ComponentFixture<CarrousselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrousselItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrousselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
