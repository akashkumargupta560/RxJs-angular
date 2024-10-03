import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyPromiseComponent } from './only-promise.component';

describe('OnlyPromiseComponent', () => {
  let component: OnlyPromiseComponent;
  let fixture: ComponentFixture<OnlyPromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyPromiseComponent]
    });
    fixture = TestBed.createComponent(OnlyPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
