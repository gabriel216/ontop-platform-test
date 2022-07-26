import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHireComponent } from './add-new-hire.component';

describe('AddNewHireComponent', () => {
  let component: AddNewHireComponent;
  let fixture: ComponentFixture<AddNewHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewHireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
