import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsContractsListComponent } from './clients-contracts-list.component';

describe('ClientsContractsListComponent', () => {
  let component: ClientsContractsListComponent;
  let fixture: ComponentFixture<ClientsContractsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsContractsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsContractsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
