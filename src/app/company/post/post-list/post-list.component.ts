import { Component, OnInit } from '@angular/core';
import {Post} from "../../../model/Post";
import {PostService} from "../../../service/post.service";
import {PageEvent} from "@angular/material/paginator";
import {CompanyService} from "../../../service/company.service";
import {Company} from "../../../model/Company";
import {Users} from "../../../model/users";
import {UserService} from "../../../user/service/userService";



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
  users: Users[] = [];

  constructor(private postService: PostService,
              private companyService: CompanyService) {}

  ngOnInit(): void {
    // @ts-ignore
    this.id = window.sessionStorage.getItem('company');
    this.findCompanyById(this.id);
    this.getPagePost(this.id, {page:0, size: 5});

  }

  getPagePost(companyId: number, nextPage: any){
    this.companyService.getAllPostByCompanyId(companyId, nextPage).subscribe((posts) =>{
      // @ts-ignore
      this.posts = posts['content'];
      // @ts-ignore
      this.totalElements = posts['totalElements'];
    })
  }

  moveNextPage(companyId: number, event: PageEvent){
    const request = {};
    // @ts-ignore
    request ['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] = event.pageSize.toString();
    this.getPagePost(companyId, request);
  }

  getPostDetail(id: number) {
    this.postService.findPostById(id).subscribe((data) =>{
      this.postDetail = data;
      this.countApplyByPost(this.postDetail.id);
    }
   )
  }

  findCompanyById(id: number){
    this.companyService.findCompanyById(id).subscribe((data) =>{
      this.company = data;
      console.log('company--->', this.company)
    })
  }

  blockPost(id: number, status: boolean){
    this.postService.blockPost(id, status).subscribe(() =>{
      alert('SUCCESS.');
      window.location.reload();
    })
  }

  countApplyByPost(id:number){
    this.postService.countApplyByPost(id).subscribe((data) => {
      this.users = data;
      console.log('users', this.users);
    })
  }


}
