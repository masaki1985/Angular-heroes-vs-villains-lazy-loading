import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from "app/heroes/hero/hero.component";
import { HeroListComponent } from "app/heroes/hero-list/hero-list.component";
import { AuthGuard } from "app/core/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'hero/:id',
        component: HeroComponent
      },
      {
        path: 'hero-list',
        component: HeroListComponent
      },
      {
        path: '**',
        redirectTo: 'hero-list',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
