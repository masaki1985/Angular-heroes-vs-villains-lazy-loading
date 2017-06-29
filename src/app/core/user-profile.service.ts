import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserProfileService {

  private usersUrl = '/api/users';
  private user: User;
  loginState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http,
    private router: Router,
  ) { }

  login(request: LoginRequest) {
    return this.http.get(this.usersUrl)
      .map(res => {
        let users = res.json().data as User[];

        if(users.some(user => user.email === request.email && user.password === request.password)) {
          this.loginState$.next(true);
          return null;
        }
        return Observable.throw(null);
      });
  }

  logout() {
    this.loginState$.next(false);
    this.router.navigateByUrl('/login');
  }

}

export interface LoginRequest {
  email: string;
  password: string;
}