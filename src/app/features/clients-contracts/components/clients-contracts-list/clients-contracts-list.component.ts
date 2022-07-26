import { Component, OnInit } from '@angular/core';
import { CONTRACTS } from 'src/app/core/constants/contracts.constants';
import { CONTRACT_STATUS } from 'src/app/core/constants/types.constants';

@Component({
  selector: 'app-clients-contracts-list',
  templateUrl: './clients-contracts-list.component.html',
})

export class ClientsContractsListComponent implements OnInit {
  contracts = CONTRACTS;
  contractStatus = CONTRACT_STATUS;
  constructor() { }

  ngOnInit(): void {
  }

}
