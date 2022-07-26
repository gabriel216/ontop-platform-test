import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsContractsViewComponent } from './clients-contracts-view.component';

describe('ClientsContractsViewComponent', () => {
  let component: ClientsContractsViewComponent;
  let fixture: ComponentFixture<ClientsContractsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsContractsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsContractsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
