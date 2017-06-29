import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileService, LoginRequest } from '../core/user-profile.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: LoginRequest;

  constructor(
    private router: Router,
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
    this.userForm = {
      email: '',
      password: '',
    }
  }

  login() {
    this.userProfileService.login(this.userForm)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      }, err =>{
        window.alert('ログインに失敗しました。');
      });
  }

}
