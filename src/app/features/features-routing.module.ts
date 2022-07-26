import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsContractsViewComponent } from './clients-contracts/pages/clients-contracts-view/clients-contracts-view.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsContractsViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
