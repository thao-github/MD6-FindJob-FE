import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})

export class PostService{
  API_POST = environment.API_LOCAL + 'post'

  constructor(private http: HttpClient) {
  }

  findPostById(id: number): Observable<any> {
    return this.http.get<any>(this.API_POST + "/" + id);
  }


  pagePost(nextPage: any){
    const params = nextPage;
    return this.http.get(this.API_POST + '/findAllPost', {params})
  }

}
