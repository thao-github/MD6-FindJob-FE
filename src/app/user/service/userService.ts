import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../model/users";


@Injectable({
  providedIn: 'root'
})

export class UserService{

  constructor(private http: HttpClient) {
  }

  findUserById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:8080/users/" + id);
  }

  updateUser(id: number, user: Users): Observable<any> {
    return this.http.put("http://localhost:8080/users/" + user.id, user);
  }

}
