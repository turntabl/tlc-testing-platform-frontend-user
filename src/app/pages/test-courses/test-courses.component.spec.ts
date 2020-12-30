import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoursesComponent } from './test-courses.component';

describe('TestCoursesComponent', () => {
  let component: TestCoursesComponent;
  let fixture: ComponentFixture<TestCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
