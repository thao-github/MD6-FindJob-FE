import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {SignUpFormUser} from "../model/SignUpFormUser";
import {Observable} from "rxjs";
import {SignInForm} from "../model/SignInForm";
import {SignUpFormCompany} from "../model/SignUpFormCompany";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP_USER = environment.API_LOCAL + 'users/register';
  private API_SIGNIN_USER = environment.API_LOCAL + 'users/login';
  private API_SIGNUP_COMPANY = environment.API_LOCAL + 'company/register';

  constructor(private http: HttpClient) { }

  signUp(signUpUser: SignUpFormUser): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_USER, signUpUser);
  }

  login(signInForm: SignInForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNIN_USER, signInForm)
  }

  signUpCompany(signUpCompany: SignUpFormCompany): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_COMPANY, signUpCompany);
  }

  // signInCompany(signInFormCompany: SignInFormCompany): Observable<any>{
  //   return this.http.post<any>(this.API_SIGNIN_COMPANY, signInFormCompany)
  // }




}
