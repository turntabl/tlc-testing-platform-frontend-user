import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUnavailableComponent } from './test-unavailable.component';

describe('TestUnavailableComponent', () => {
  let component: TestUnavailableComponent;
  let fixture: ComponentFixture<TestUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUnavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
