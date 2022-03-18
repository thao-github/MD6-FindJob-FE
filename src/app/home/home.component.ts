import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../user/service/postService";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {Post} from "../model/Post";
import {JobLocation} from "../model/JobLocation";
import {UserService} from "../user/service/userService";
import {Field} from "../model/Field";
import {FieldService} from "../service/field.service";
import {SearchForm} from "../model/SearchForm";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit {

  posts: Post[] = [];

  totalElements: number = 0;

  jobLocations: JobLocation [] = [];

  fields: Field [] = [];

  formSearch = new FormGroup({
    'title': new FormControl(null),
    'jobLocation': new FormControl(null,),
    'idField': new FormControl(null,),
    'salary': new FormControl(null,),
  });

  constructor(private http: HttpClient, private postService: PostService, private router: Router,
              private userService: UserService,
              private fieldService: FieldService) {
  }

  ngOnInit(): void {
    this.getPagePost({page:0, size: 5});
    // @ts-ignore

    this.getJobLocation();

    this.getAllField();
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

 getJobLocation() {
    return this.userService.getJobLocation().subscribe((data) =>{
      this.jobLocations = data;
      console.log('jobLocation', data)
    })
 }

  getAllField(){
    this.fieldService.getAllField().subscribe((data) =>{
      this.fields = data;
    })
  }

  //search
  search(searchForm: any) {
    this.userService.searching(searchForm).subscribe((posts) => {
      this.posts = posts;
      this.totalElements = posts.length;
    }, error => {
      console.log(error)
    })
    console.log(searchForm)
  }

}
