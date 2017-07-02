import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "app/core/in-memory-data.service";

import { UserProfileService } from "app/core/user-profile.service";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "app/login/login.component";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [
    FormsModule,
    HttpModule,
  ],
  providers: [
    UserProfileService,
    AuthGuard,
  ],
})
export class CoreModule { }
