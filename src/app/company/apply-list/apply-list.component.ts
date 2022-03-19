import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Users} from "../../model/users";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.css']
})
export class ApplyListComponent implements OnInit {
  post!: Post;
  users: Users[] = []
  id!: number;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    })
  }

  ngOnInit(): void {
    this.getAppliedUserList(this.id);
    this.findPostById(this.id);
  }

  getAppliedUserList(id: number) {
    this.postService.countApplyByPost(id).subscribe((data) => {
      this.users = data;
      console.log('users', this.users);
    })
  }

  findPostById(id: number) {
    this.postService.findPostById(id).subscribe((post) => {
      this.post = post;
      console.log('post', post);
    })
  }

}
