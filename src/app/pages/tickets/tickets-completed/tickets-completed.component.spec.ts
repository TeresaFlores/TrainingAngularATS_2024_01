import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCompletedComponent } from './tickets-completed.component';

describe('TicketsCompletedComponent', () => {
  let component: TicketsCompletedComponent;
  let fixture: ComponentFixture<TicketsCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsCompletedComponent]
    });
    fixture = TestBed.createComponent(TicketsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
