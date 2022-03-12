import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})

export class PostService{

  constructor(private http: HttpClient) {
  }

  findPostById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:8080/post/" + id);
  }

  findAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/post/findAllPost')
  }

}
