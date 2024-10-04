import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynAwaitComponent } from './asyn-await.component';

describe('AsynAwaitComponent', () => {
  let component: AsynAwaitComponent;
  let fixture: ComponentFixture<AsynAwaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsynAwaitComponent]
    });
    fixture = TestBed.createComponent(AsynAwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
