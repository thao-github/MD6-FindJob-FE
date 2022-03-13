import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_COMPANY= environment.API_LOCAL +`company`

  constructor(private http: HttpClient) {
  }

  getAllPost():Observable<any>{
    return this.http.get<any>(this.API_COMPANY + `/post`)
  }

  getAllField():Observable<any>{
    return this.http.get<any>(this.API_COMPANY + `/field` )
  }

  createPost(post: Post):Observable<any>{
    return this.http.post<any>(this.API_COMPANY +`/post/create`,post)
  }

  findPostById(id:number):Observable<any>{
    return this.http.get<any>(this.API_COMPANY +`/post/${id}`)
  }

  editPost(id: number, post: Post): Observable<any> {
    return this.http.put<any>(this.API_COMPANY + `/post/edit/${id}`, post)
  }


}
