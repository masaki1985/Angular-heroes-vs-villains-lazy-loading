import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZeroPaddingPipe } from './zero-padding.pipe';
import { AuthGuard } from "app/shared/auth.guard";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZeroPaddingPipe,
  ],
  exports: [
    ZeroPaddingPipe,
  ],
  providers: [
    AuthGuard,
  ],
})
export class SharedModule { }
