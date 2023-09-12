import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSchedulesComponent } from './select-schedules.component';

describe('SelectSchedulesComponent', () => {
  let component: SelectSchedulesComponent;
  let fixture: ComponentFixture<SelectSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSchedulesComponent]
    });
    fixture = TestBed.createComponent(SelectSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
