import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailsComponent } from './tails.component';

describe('TailsComponent', () => {
  let component: TailsComponent;
  let fixture: ComponentFixture<TailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
