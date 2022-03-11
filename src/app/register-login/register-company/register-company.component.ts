import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  status= '';

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
    'address': new FormControl(),
    'image': new FormControl(),
  });

  errorName: any = {
    message: 'name_existed'
  }

  errorEmail: any = {
    message: 'email_existed'
  }
  success: any = {
    message: "yes"
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    const signUpCompany = this.registerForm.value;
    console.log(signUpCompany);
    this.authService.signUpCompany(signUpCompany).subscribe(data => {
        console.log("data ==> ", JSON.stringify(data));
      if (JSON.stringify(data) == JSON.stringify(this.errorName)) {
        this.status = 'The company name existed.'
      }
        if (JSON.stringify(data) == JSON.stringify(this.errorEmail)) {
          this.status = 'The email existed.'
        }
        if (JSON.stringify(data) == JSON.stringify(this.success)) {
          this.status = 'Create Account Success!';
        }

      }, error => {
      console.log(error)
    })
    }


}
