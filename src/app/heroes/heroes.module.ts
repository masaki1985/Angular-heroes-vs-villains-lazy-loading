import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../core/in-memory-data.service';

import { ZeroPaddingPipe } from '../shared/zero-padding.pipe';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './shared/hero.service';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "app/shared/auth.guard";
import { UserProfileService } from "app/core/user-profile.service";

@NgModule({
  declarations: [
    HeroComponent,
    HeroesComponent,
    HeroListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroesRoutingModule,
  ],
  providers: [
    HeroService,
    UserProfileService,
    AuthGuard,    
  ],
})
export class HeroesModule { }
