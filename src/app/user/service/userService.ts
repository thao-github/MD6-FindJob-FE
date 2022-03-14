import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../model/users";
import { environment } from "src/environments/environment.prod";


@Injectable({
  providedIn: 'root'
})

export class UserService{
API_URL = environment.API_LOCAL + `/users`;
  constructor(private http: HttpClient) {
  }

  findUserById(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL+`/${id}`);
  }

  updateUser(id: number, user: Users): Observable<any> {
    return this.http.put("http://localhost:8080/users/" + user.id, user);
  }

}
