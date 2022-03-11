import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_POST= environment.API_LOCAL + `post`

  constructor(private http: HttpClient) {
  }

  getAllPost():Observable<any>{
    return this.http.get<any>(this.API_POST + `findAllPost`)
  }

  findPostById(id:number):Observable<any>{
    return this.http.get<any>(this.API_POST +`${id}`)
  }

  editPost(post:Post):Observable<any>{
    return this.http.put<any>(this.API_POST, post)
  }

}
