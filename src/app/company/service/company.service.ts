import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";
import {Company} from "../model/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_URL = environment.API_LOCAL;

  constructor(private http: HttpClient) {
  }

  findCompanyByCode(companyCode: string): Observable<any> {
    return this.http.get<any>( this.API_URL+ `/company/FPT13456`);
  }

  editCompanyInfo(company: Company): Observable<any>{
    return this.http.put<any>(this.API_URL+`/company/`, company)
  }


}
