import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {SignUpFormUser} from "../model/SignUpFormUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API_LOCAL
  private API_SIGNUP = environment.API_LOCAL + 'signup/user';

  constructor(private http: HttpClient) { }

  signUp(signUpUser: SignUpFormUser): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUpUser);
  }
}
