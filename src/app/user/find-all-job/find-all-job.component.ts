import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../service/postService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-find-all-job',
  templateUrl: './find-all-job.component.html',
  styleUrls: ['./find-all-job.component.css']
})
export class FindAllJobComponent implements OnInit {

  posts: Post[] = [];

  formCRUD_User!: FormGroup;

  constructor(private http: HttpClient, private postService: PostService) {
  }


  ngOnInit(): void {
    this.formCRUD_User = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(""),
      salary: new FormControl(""),
      jobLocation: new FormControl(""),
      experience: new FormControl(0),
      jobType: new FormControl(''),
      applicationDeadline: new FormControl(""),
      description: new FormControl(""),
      vacancy: new FormControl(0),
      gender: new FormControl(""),
      postCode: new FormControl(""),
      status: new FormControl(true)
    })
    this.findAllPost();
  }

  findAllPost(){
    this.postService.findAllPost().subscribe(data => {this.posts = data })
  }

}
