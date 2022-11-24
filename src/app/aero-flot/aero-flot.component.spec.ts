import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroFlotComponent } from './aero-flot.component';

describe('AeroFlotComponent', () => {
  let component: AeroFlotComponent;
  let fixture: ComponentFixture<AeroFlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeroFlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroFlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
