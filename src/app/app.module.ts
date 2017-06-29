import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZeroPaddingPipe } from './shared/zero-padding.pipe';
import { VillainComponent } from './villains/villain/villain.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainListComponent } from './villains/villain-list/villain-list.component';
import { VillainService } from './villains/shared/villain.service';
import { UserProfileService } from './core/user-profile.service';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { HeroesModule } from "app/heroes/heroes.module";

@NgModule({
  declarations: [
    AppComponent,
    ZeroPaddingPipe,
    VillainsComponent,
    VillainComponent,
    VillainListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    VillainService,
    UserProfileService,
    AuthGuard,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
