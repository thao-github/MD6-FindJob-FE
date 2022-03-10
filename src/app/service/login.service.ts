import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {SignInFormUser} from "../model/SignInFormUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.API_LOCAL;

  constructor(private http: HttpClient) { }

  login(signInFormUser: SignInFormUser): Observable<any>{
    console.log('account--->',signInFormUser)
    return this.http.post<any>(this.API_URL + `/signin/user`, signInFormUser)
  }
}

