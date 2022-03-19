import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../service/postService";
import {PageEvent} from "@angular/material/paginator";
import {Post} from "../../model/Post";
import {ApplyService} from "../service/apply.service";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  totalElements: number = 0;

  posts: Post[] = [];

  postDetail!: Post;


  constructor(private http: HttpClient, private postService: PostService, private applyService: ApplyService) {
  }

  ngOnInit(): void {
    this.pagePost({page:0, size:5});
    this.findAllPostByStatusAndApply();
  }

  findAllPostByStatusAndApply() {
    this.postService.findAllPostByStatusAndApply().subscribe(data => {
      this.posts = data;
      this.totalElements = this.posts.length;
    })
  }

  pagePost(nextPage: any){
    this.postService.pagePost(nextPage).subscribe(data => {
      // @ts-ignore
      this.posts = data['content']
      // @ts-ignore
      this.totalElements = data['totalElements']
    })
  }

  moveNextPage(event: PageEvent){
    const req = {};
    // @ts-ignore
    req['page'] = event.pageIndex.toString();
    // @ts-ignore
    req['size'] = event.pageSize.toString();
    this.pagePost(req);
  }

  getPostDetail(id: number) {
    this.postService.findPostById(id).subscribe((data) =>{
      this.postDetail = data;
    })
  }

  apply(pid: number) {
    // @ts-ignore
    this.applyService.apply(pid).subscribe(() => {
      alert("Apply SUCCESS.");
      window.location.reload();
    })
  }
}
