import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from "app/core/in-memory-data.service";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { ZeroPaddingPipe } from './zero-padding.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    ZeroPaddingPipe,
  ],
  exports: [
    ZeroPaddingPipe,
    FormsModule,
    HttpModule,
  ],
  providers: [],
})
export class SharedModule { }
