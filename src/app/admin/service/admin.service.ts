import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../../company/model/company";
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

  getAllCompany(): Observable<any> {
    return this.http.get(this.API_URL + "company")
  }

}
