import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../../model/Company";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = environment.API_LOCAL;

  constructor(private http: HttpClient) { }

  confirmCompany(company: Company): Observable<any> {
    return this.http.put( this.API_URL + "admin/confirmCompany/" + company.id, company);
  }

  unConfirmCompany(company: Company): Observable<any> {
    return this.http.put( this.API_URL + "admin/unConfirmCompany/" + company.id, company);
  }

  getAllCompany(): Observable<any> {
    return this.http.get(this.API_URL + "company")
  }

  searchCompany(email: string): Observable<any> {
    return this.http.get(this.API_URL + "admin/search/" + email)
  }

}
