import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AddNewHireComponent } from "./components/add-new-hire/add-new-hire.component";
import { SearchComponent } from './components/search/search.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { ActionsContractsListComponent } from './components/actions-contracts-list/actions-contracts-list.component';
import { HelpCenterChatComponent } from './components/help-center-chat/help-center-chat.component';

@NgModule({
    declarations: [
        AddNewHireComponent,
        SearchComponent,
        FilterSectionComponent,
        ActionsContractsListComponent,
        HelpCenterChatComponent
    ],
    exports: [
        AddNewHireComponent,
        SearchComponent,
        FilterSectionComponent,
        ActionsContractsListComponent,
        HelpCenterChatComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
