import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {SignUpFormUser} from "../model/SignUpFormUser";
import {Observable} from "rxjs";
import {SignInFormUser} from "../model/SignInFormUser";
import {SignUpFormCompany} from "../model/SignUpFormCompany";
import {SignInFormCompany} from "../model/SignInFormCompany";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP_USER = environment.API_LOCAL + 'signup/user';
  private API_SIGNIN_USER = environment.API_LOCAL + 'signin/user';
  private API_SIGNUP_COMPANY = environment.API_LOCAL + 'signup/company';
  private API_SIGNIN_COMPANY = environment.API_LOCAL + 'signin/company';

  constructor(private http: HttpClient) { }

  signUp(signUpUser: SignUpFormUser): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_USER, signUpUser);
  }

  login(signInFormUser: SignInFormUser): Observable<any>{
    return this.http.post<any>(this.API_SIGNIN_USER, signInFormUser)
  }

  signUpCompany(signUpCompany: SignUpFormCompany): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_COMPANY, signUpCompany);
  }

  signInCompany(signInFormCompany: SignInFormCompany): Observable<any>{
    return this.http.post<any>(this.API_SIGNIN_COMPANY, signInFormCompany)
  }




}
