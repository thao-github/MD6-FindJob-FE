import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {
  loginForm = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  })

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginCompany() {
    const signInFormCompany = this.loginForm.value;
    this.authService.signInCompany(signInFormCompany).subscribe((data) => {
      sessionStorage.setItem('company', JSON.stringify(data));
      this.router.navigate(['/company'])
    }, error => {
      console.log(error)
    })
  }

}
