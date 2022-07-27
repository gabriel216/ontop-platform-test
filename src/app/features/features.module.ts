import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { ClientsContractsListComponent } from "./clients-contracts/components/clients-contracts-list/clients-contracts-list.component";
import { ClientsContractsViewComponent } from './clients-contracts/pages/clients-contracts-view/clients-contracts-view.component';
import { FeaturesRoutingModule } from "./features-routing.module";
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
    imports: [
        FeaturesRoutingModule,
        CoreModule,
        SharedModule,
        CommonModule,
        OrderModule
    ],
    declarations: [
        ClientsContractsListComponent,
        ClientsContractsViewComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class FeaturesModule { }
