import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/Post";
import {PostService} from "../../service/post.service";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Post [] = [];
  id!: number;

  constructor(private postService: PostService) {}


  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPost().subscribe((posts) =>{
      console.log('post==>', posts)
      this.posts = posts;
    }, error => {
      console.log(error)
    })
  }

}
