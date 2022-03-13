import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";
import {Field} from "../../model/Field";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  fields: Field[] = [];
  post!: Post;
  status: any;

  postForm = new FormGroup({
    'id': new FormControl(null),
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
  id!: number;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log('id===>', this.id);

    })
  }

  ngOnInit(): void {
    this.getAllField();
    this.findPostById(this.id);

    console.log("id oninit", this.id)
  }

  getAllField() {
    this.postService.getAllField().subscribe((field) => {
      console.log(field)
      this.fields = field;
    })
  }

  findPostById(id: number) {
    return this.postService.findPostById(id).subscribe((post) => {
      console.log('editPost ===>', post);
      this.post = post;
      this.postForm = new FormGroup({
        'id': new FormControl(post.id),
        'title': new FormControl(post.title),
        'salary': new FormControl(post.salary),
        'jobLocation': new FormControl(post.jobLocation),
        'position': new FormControl(post.position),
        'experience': new FormControl(post.experience),
        'jobType': new FormControl(post.jobType),
        'applicationDeadline': new FormControl(post.applicationDeadline),
        'description': new FormControl(post.description),
        'vacancy': new FormControl(post.vacancy),
        'gender': new FormControl(post.gender),
        'field': new FormControl(post.field),
        'status': new FormControl(post.status)
      })
    }, error => {
      console.log(error);
    })
  }

  saveChanges(id: number) {
    const post = this.postForm.value;
    this.postService.editPost(id, post).subscribe((post) => {
      this.status = "Post UPDATED."
    }, error => {
      console.log(error)
    })
  }
}
