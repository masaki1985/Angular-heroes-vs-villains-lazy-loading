import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZeroPaddingPipe } from './zero-padding.pipe';

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
  providers: [],
})
export class SharedModule { }
