import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../core/in-memory-data.service';

import { VillainComponent } from "app/villains/villain/villain.component";
import { VillainsComponent } from "app/villains/villains.component";
import { VillainListComponent } from "app/villains/villain-list/villain-list.component";
import { VillainService } from "app/villains/shared/villain.service";
import { VillainsRoutingModule } from './villains-routing.module';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { UserProfileService } from "app/core/user-profile.service";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    VillainComponent,
    VillainsComponent,
    VillainListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    VillainsRoutingModule,
    SharedModule,
  ],
  providers: [
    VillainService,
    UserProfileService,
  ],
})
export class VillainsModule { }
