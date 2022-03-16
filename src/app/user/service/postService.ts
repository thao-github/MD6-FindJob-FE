import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PostService{

  constructor(private http: HttpClient) {
  }

  findPostById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:8080/post/" + id);
  }


  pagePost(nextPage: any){
    const params = nextPage;
    return this.http.get('http://localhost:8080/post/findAllPost', {params})
  }

}
