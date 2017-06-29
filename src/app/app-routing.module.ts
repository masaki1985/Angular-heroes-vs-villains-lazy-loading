import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './heroes/hero/hero.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { VillainComponent } from './villains/villain/villain.component';
import { VillainListComponent } from './villains/villain-list/villain-list.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'heroes',
    loadChildren: './heroes/heroes.module#HeroesModule',
  },
  {
    path: 'villains',
    loadChildren: './villains/villains.mocule#VillainsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
