import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UserProfileService } from '../core/user-profile.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userProfileService: UserProfileService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userProfileService.loginState$.map(
        res => {
          if(!res) {
            window.alert('ログインしてください。');
            this.router.navigateByUrl('/login');
            return false;
          }
          return true;
        });
  }
}
