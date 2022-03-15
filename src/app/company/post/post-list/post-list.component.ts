import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/Post";
import {PostService} from "../../service/post.service";
import {PageEvent} from "@angular/material/paginator";
import {CompanyService} from "../../service/company.service";
import {Company} from "../../model/company";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Post [] = [];
  id!: number;
  postDetail!: Post;
  totalElements: number = 0;
  company!: Company;

  constructor(private postService: PostService,
              private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getPagePost({page:0, size: 5});
    // @ts-ignore
    this.id = window.sessionStorage.getItem('company');
    this.findCompanyById(this.id);
  }

  getPagePost(nextPage: any){
    this.postService.getAllPost(nextPage).subscribe((posts) =>{
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

  getPostDetail(id: number) {
    this.postService.findPostById(id).subscribe((data) =>{
      this.postDetail = data;
      console.log('post detail--->',this.postDetail);
    }
   )
  }

  findCompanyById(id: number){
    this.companyService.findCompanyById(id).subscribe((data) =>{
      this.company = data;
      console.log('company--->', this.company)
    })
  }


}
