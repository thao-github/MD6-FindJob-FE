import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {Apply} from "../../model/Apply";

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  API_APPLY = environment.API_LOCAL + `apply`;
  userId = window.sessionStorage.getItem("user")

  constructor(private http: HttpClient) {
    console.log(this.userId)
  }

  // Apply khi không đính token vào request
  // apply(pid: number, apply: Apply): Observable<any> {
  //   return this.http.post(this.API_APPLY + `/add/${pid}?userId=${this.userId}`, apply)
  // }

  // Apply khi có đính token vào request
  apply(pid: number, apply: Apply): Observable<any> {
    return this.http.post(this.API_APPLY + `/add/${pid}`, apply)
  }

  showApplyByUser(): Observable<any> {
    return this.http.get<any>(this.API_APPLY + `/list`)
  }
}
