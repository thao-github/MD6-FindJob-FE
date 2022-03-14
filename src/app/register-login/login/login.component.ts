import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormUser = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required)
  })

  loginFormCompany = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required)
  })


  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  status: any;
  token: any;
  tokenInfo: any;
  decodeToken = '';
  userId: any;
  companyId: any;

  loginUser() {
    window.sessionStorage.clear();
    const signInForm = this.loginFormUser.value;
    this.authService.loginUser(signInForm).subscribe((data) => {
      this.token = data.token;
      if (this.token === null) {
        this.status = 'Invalid Email or Password.'
        this.loginFormUser.reset();
      } else {
        this.tokenInfo = this.getDecodedAccessToken(this.token);
        this.userId = this.tokenInfo.USER_ID;
        console.log("company Id ===>", this.userId);
        if (this.userId) {
          this.router.navigate(['/user']);
          window.sessionStorage.setItem('user', this.userId);
        } else {
          this.status = 'Unauthorized Access'
        }
      }
    })
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  loginCompany() {
    window.sessionStorage.clear();
    const signInForm = this.loginFormCompany.value;

    this.authService.loginCompany(signInForm).subscribe((data) => {
      this.token = data.token;
      if (this.token === null) {
        this.status = 'Invalid Email or Password.'
        this.loginFormUser.reset();
      } else {
        this.tokenInfo = this.getDecodedAccessToken(this.token);
        this.companyId = this.tokenInfo.COMPANY_ID;
        if (this.companyId) {
          this.router.navigate(['/company']);
          window.sessionStorage.setItem('company', this.companyId);
        } else {
          this.status = 'Unauthorized Access'
        }
      }
    })
  }

  reload() {
    window.location.reload();
  }

  reset() {
    this.status='';
  }
}

