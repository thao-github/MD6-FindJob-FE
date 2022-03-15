import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../service/postService";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-find-all-job',
  templateUrl: './find-all-job.component.html',
  styleUrls: ['./find-all-job.component.css']
})
export class FindAllJobComponent implements OnInit {

  totalElements: number = 0;

  posts: Post[] = [];


  constructor(private http: HttpClient, private postService: PostService) {
  }


  ngOnInit(): void {
    this.pagePost({page:0, size:5})
  }

  pagePost(nextPage: any){
    this.postService.pagePost(nextPage).subscribe(data => {
      // @ts-ignore
      this.posts = data['content']
      // @ts-ignore
      this.totalElements = data['totalElements']
    })
  }

  nextPage(event: PageEvent){
    const req = {};
    // @ts-ignore
    req['page'] = event.pageIndex.toString();
    // @ts-ignore
    req['size'] = event.pageSize.toString();
    this.pagePost(req);
  }

}
