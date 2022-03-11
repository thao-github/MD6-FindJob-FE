import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  getAllPost(){
    return this.postService.getAllPost().subscribe((data) =>{
      console.log(data);
    })
  }
}
