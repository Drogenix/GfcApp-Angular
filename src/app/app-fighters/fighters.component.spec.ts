import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFightersComponent } from './fighters.component';

describe('AppFightersComponent', () => {
  let component: AppFightersComponent;
  let fixture: ComponentFixture<AppFightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFightersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
