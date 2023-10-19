import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutAblakComponent } from './logout-ablak.component';

describe('LogoutAblakComponent', () => {
  let component: LogoutAblakComponent;
  let fixture: ComponentFixture<LogoutAblakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutAblakComponent]
    });
    fixture = TestBed.createComponent(LogoutAblakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
