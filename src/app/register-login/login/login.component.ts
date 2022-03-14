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
  loginForm = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  })

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void{
  }

  status: any;
  token = '';
  tokenInfo : any;
  decodeToken = '';
  result: any;
  isCompany!: boolean;

  login() {
    const signInForm = this.loginForm.value;
    this.authService.login(signInForm).subscribe((data) => {
      this.token = data.token;
      console.log('data===>', data)
      this.tokenInfo = this.getDecodedAccessToken(this.token);

      this.isCompany = this.tokenInfo.isCompany;
      if(this.isCompany) {
        this.router.navigate(['/company'])
      } else {
        this.router.navigate(['/user'])
      }
      window.sessionStorage.setItem('data', JSON.stringify(this.tokenInfo));
    })
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }


  loginUser() {

  }

  loginCompany() {

  }
}

