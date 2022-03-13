import {Component, OnInit} from '@angular/core';
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
              private router: Router) {
  }

  ngOnInit(): void {
  }

  status: any;

  loginUser() {
    const signInFormUser = this.loginForm.value;
    this.authService.login(signInFormUser).subscribe((data) => {
      if (data.token != null) {
        console.log("login ok")
        window.sessionStorage.setItem('company', JSON.stringify(data));
        this.router.navigate(['/company']);
      }
      if (data.status === 202) {
        this.status = 'Email or Password invalid.'
        this.loginForm.reset();
      }
    }, error => {
      console.log(error)
    });
  }
}
