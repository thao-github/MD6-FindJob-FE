import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";
import {Company} from "../model/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API_COMPANY = environment.API_LOCAL + `company`;

  constructor(private http: HttpClient) {
  }

  findCompanyById(id: number): Observable<any> {
    return this.http.get<any>( this.API_COMPANY+ `/${id}`);
  }

  getAllPostByCompanyId(companyId: number, nextPage: any){
    const params = nextPage;
    return this.http.get(this.API_COMPANY+`/postByCompanyId/${companyId}`, {params})
  }

  editCompanyInfo(company: Company):Observable<any>{
    return this.http.put<any>(this.API_COMPANY, company)
  }

}
