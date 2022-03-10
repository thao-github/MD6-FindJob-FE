import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";

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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    const signInFormUser = this.loginForm.value;
    this.loginService.login(signInFormUser).subscribe((data) => {
      console.log('account --->', data);
      sessionStorage.setItem('account', JSON.stringify(data));
    }, error => {
      console.log(error)
    })

  }
}
