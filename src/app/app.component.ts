import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileService } from './core/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Heroes vs. Villains';
  loginState$ = this.userProfileService.loginState$;

  constructor(
    private router: Router,
    private userProfileService: UserProfileService,
  ) { }


  gotoHeroes(): void {
    this.router.navigateByUrl('/heroes/hero-list');
  }

  gotoVillains(): void {
    this.router.navigateByUrl('/villains/villain-list');    
  }

  gotoLogin(): void {
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    this.userProfileService.logout();
  }

}
