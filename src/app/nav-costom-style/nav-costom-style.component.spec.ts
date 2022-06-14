import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCostomStyleComponent } from './nav-costom-style.component';

describe('NavCostomStyleComponent', () => {
  let component: NavCostomStyleComponent;
  let fixture: ComponentFixture<NavCostomStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCostomStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCostomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
