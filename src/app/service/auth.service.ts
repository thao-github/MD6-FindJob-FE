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
  private API_LOGIN_USER = environment.API_LOCAL + 'users/login';
  private API_SIGNUP_COMPANY = environment.API_LOCAL + 'company/register';
  private API_LOGIN_COMPANY = environment.API_LOCAL + 'company/login';

  constructor(private http: HttpClient) { }

  signUp(signUpFormUser: SignUpFormUser): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_USER, signUpFormUser);
  }

  loginUser(signInFormUser: SignInForm): Observable<any>{
    return this.http.post<any>(this.API_LOGIN_USER, signInFormUser)
  }

  signUpCompany(signUpFormCompany: SignUpFormCompany): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_COMPANY, signUpFormCompany);
  }

  loginCompany(signInFormCompany: SignInForm): Observable<any>{
    return this.http.post<any>(this.API_LOGIN_COMPANY, signInFormCompany)
  }
}
