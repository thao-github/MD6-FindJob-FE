import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../service/post.service";
import {Field} from "../../model/Field";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  fields: Field[] = [];
  post!: Post;
  status: any;
  companyCode!: string;

  postForm = new FormGroup({
  'title' : new FormControl(null, Validators.required),
  'salary' :new FormControl(null, Validators.required),
  'jobLocation' : new FormControl(null, Validators.required),
  'position' : new FormControl(null, Validators.required),
  'experience' : new FormControl(null, Validators.required),
  'jobType' : new FormControl(null, Validators.required),
  'applicationDeadline' : new FormControl(null, Validators.required),
  'description' : new FormControl(null, Validators.required),
  'vacancy' : new FormControl(null, Validators.required),
  'gender' : new FormControl(null, Validators.required),
  'field' : new FormControl(null, Validators.required),
  'company' : new FormControl(null, Validators.required),
  'status' : new FormControl(null, Validators.required),
  })


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getAllField();
  }

  getAllField(){
    this.postService.getAllField().subscribe((data) =>{
      console.log(data)
      this.fields = data;
    })
  }

  createPost() {
    const post = this.postForm.value;
    this.postService.createPost(post).subscribe((data) =>{
      console.log('data ===>',data);
     this.post = data;
     this.status='Create Post SUCCESS.';
    }, error => {
      console.log(error)
    })
  }

}
