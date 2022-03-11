import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

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
              private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    const signInFormUser = this.loginForm.value;
    this.authService.login(signInFormUser).subscribe((data) => {
      console.log('user --->', data);
      sessionStorage.setItem('user', JSON.stringify(data));
      // this.router.navigate(['USER PAGE'])
    }, error => {
      console.log(error)
    })
  }
}
