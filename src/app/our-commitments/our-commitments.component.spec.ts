import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCommitmentsComponent } from './our-commitments.component';

describe('OurCommitmentComponent', () => {
  let component: OurCommitmentsComponent;
  let fixture: ComponentFixture<OurCommitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCommitmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have commitments defined', () => {
    expect(component.commitments).toBeDefined();
    expect(component.commitments.length).toBeGreaterThan(0);
  });

  it('should render commitment titles', () => {
    const compiled = fixture.nativeElement;
    const titles = compiled.querySelectorAll('.commitment h3');
    expect(titles.length).toBe(component.commitments.length);
  });
});
