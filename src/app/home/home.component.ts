import { Component, OnInit } from '@angular/core';
import {Post} from "../user/model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../user/service/postService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient, private postService: PostService, private router: Router ) {
  }

  ngOnInit(): void {
    this.findAllPost();
  }

  findAllPost(){
    this.postService.findAllPost().subscribe(data => {this.posts = data });
  }

  notLogin() {
    this.router.navigate(["login"]);
    alert("First, you must log in");
  }

}
