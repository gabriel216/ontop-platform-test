import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsContractsListComponent } from './actions-contracts-list.component';

describe('ActionsContractsListComponent', () => {
  let component: ActionsContractsListComponent;
  let fixture: ComponentFixture<ActionsContractsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsContractsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsContractsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
