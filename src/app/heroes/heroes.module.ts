import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../core/in-memory-data.service';

import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './shared/hero.service';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from "app/shared/shared.module";
import { UserProfileService } from "app/core/user-profile.service";

@NgModule({
  declarations: [
    HeroComponent,
    HeroesComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroesRoutingModule
  ],
  providers: [
    HeroService,
    UserProfileService   
  ]
})
export class HeroesModule { }
