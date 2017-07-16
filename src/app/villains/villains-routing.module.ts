import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillainComponent } from "app/villains/villain/villain.component";
import { VillainListComponent } from "app/villains/villain-list/villain-list.component";
import { AuthGuard } from "app/core/auth.guard";

const routes: Routes = [
    {
    path: '',
    canActivate: [AuthGuard],    
    children: [
      {
        path: 'villain/:id',
        component: VillainComponent
      },
      {
        path: 'villain-list',
        component: VillainListComponent
      },
      {
        path: '**',
        redirectTo: 'villain-list',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsRoutingModule { }
