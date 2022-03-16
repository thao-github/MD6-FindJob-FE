import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../../model/users";
import { environment } from "src/environments/environment.prod";


@Injectable({
  providedIn: 'root'
})

export class UserService{
API_USER = environment.API_LOCAL + `user`;
  constructor(private http: HttpClient) {
  }

  findUserById(id: number): Observable<any> {
    return this.http.get<any>(this.API_USER+`/${id}`);
  }

  updateUser(id: number, user: Users): Observable<any> {
    return this.http.put(this.API_USER + `/${id}`, user);
  }

}
