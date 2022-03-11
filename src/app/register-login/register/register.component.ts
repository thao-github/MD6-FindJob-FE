import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SignUpFormUser} from "../../model/SignUpFormUser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status= '';
  statusConfirmPassword= '';
  registerForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    'phoneNumber': new FormControl(null, Validators.required),
    'roles': new FormControl(['USER'])
  });

  error2: any = {
    message: "email_existed"
  }
  success: any = {
    message: "yes"
  }

  signUpFormUser!: SignUpFormUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    const signUpFormUser = this.registerForm.value;
    // @ts-ignore
    const password = document.getElementById("password").value;
    // @ts-ignore
    const confirmPassword = document.getElementById("cfpassword").value;
    if (password === confirmPassword) {
      this.authService.signUp(signUpFormUser).subscribe(data => {
        console.log("data == ", data);
        if (JSON.stringify(data) == JSON.stringify(this.error2)) {
          this.status = 'The email existed.'
        }
        if (JSON.stringify(data) == JSON.stringify(this.success)) {
          this.statusConfirmPassword = '';
          this.status = 'Create Account Success.'
        }
      })
    } else {
      this.statusConfirmPassword = 'Confirmation password does not match.';
    }
    console.log(this.registerForm.value)
  }
}
