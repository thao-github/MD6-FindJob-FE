import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../service/post.service";
import {Field} from "../../../model/Field";
import {Post} from "../../../model/Post";
import {CompanyService} from "../../../service/company.service";
import {Company} from "../../../model/Company";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  fields: Field[] = [];
  post!: Post;
  id!: number;

  postForm = new FormGroup({
  'title' : new FormControl(null, Validators.required),
  'minSalary' : new FormControl(null, Validators.required),
  'maxSalary' :new FormControl(null, Validators.required),
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

  constructor(private postService: PostService,
              private companyService: CompanyService) {
  }


  ngOnInit(): void {
    this.getAllField();
  }

  getAllField(){
    this.postService.getAllField().subscribe((data) =>{
      console.log("data")
      console.log(data)
      this.fields = data;
    })
  }

  company!: Company;
  createPost() {
    // @ts-ignore
    this.id = window.sessionStorage.getItem('company');
    this.companyService.findCompanyById(this.id).subscribe((data) =>{
      let post = this.postForm.value;
      post.status = true;
      post.company = data;
      console.log('post --->', post)
      this.postService.createPost(post).subscribe((data) =>{
        this.post = data;
        alert('Post CREATED.');
        window.location.reload();
      }, error => {
        console.log(error)
      })
    })
  }



}
