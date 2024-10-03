import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynemicPromiseComponent } from './dynemic-promise.component';

describe('DynemicPromiseComponent', () => {
  let component: DynemicPromiseComponent;
  let fixture: ComponentFixture<DynemicPromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynemicPromiseComponent]
    });
    fixture = TestBed.createComponent(DynemicPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
