import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePromiseComponent } from './simple-promise.component';

describe('SimplePromiseComponent', () => {
  let component: SimplePromiseComponent;
  let fixture: ComponentFixture<SimplePromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplePromiseComponent]
    });
    fixture = TestBed.createComponent(SimplePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
