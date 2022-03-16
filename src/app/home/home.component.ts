import { Component, OnInit } from '@angular/core';
import {Post} from "../user/model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../user/service/postService";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit {
  posts: Post[] = [];

  totalElements: number = 0;

  constructor(private http: HttpClient, private postService: PostService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getPagePost({page:0, size: 5});
    // @ts-ignore
  }

  getPagePost(nextPage: any){
    this.postService.pagePost(nextPage).subscribe((posts) =>{
      // @ts-ignore
      this.posts = posts['content'];
      // @ts-ignore
      this.totalElements = posts['totalElements'];
    })
  }

  moveNextPage(event: PageEvent){
    const request = {};
    // @ts-ignore
    request ['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] = event.pageSize.toString();
    this.getPagePost(request);
  }

  notLogin() {
    this.router.navigate(["login"]);
    alert("First, you must log in");
  }

}
