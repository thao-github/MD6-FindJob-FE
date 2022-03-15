import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post";
import {PostService} from "../service/postService";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Field} from "../../company/model/Field";
import {Company} from "../../company/model/company";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id!: number;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.postDetail()
    });
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  post: Post = new Post(0,'','','','',0,'','','',0,'','',true,Field,Company);

  postDetail() {
    this.postService.findPostById(this.id).subscribe(data => {
      this.post = data
      console.log(this.post)
    })
  }

}
