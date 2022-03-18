import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private API_COMPANY = environment.API_LOCAL + `company`

  constructor(private http: HttpClient) {
  }

  getAllField(): Observable<any> {
    return this.http.get<any>(this.API_COMPANY + `/field`)
  }


}
