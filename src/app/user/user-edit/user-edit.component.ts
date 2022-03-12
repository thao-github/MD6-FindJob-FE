import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Users} from "../model/users";
import {UserService} from "../service/userService";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {finalize} from "rxjs";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user : Users = new Users(0,'','','','','','','','','','',0,'','','','','','');

  id!: number;

  constructor(private userService : UserService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.userDetail();
    });
  }

  ngOnInit(): void {

  }

  userDetail() {
    this.userService.findUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }

  editUser() {
    this.userService.updateUser(this.user).subscribe(() => {
      alert('Edit Success!');
      this.router.navigate(['/user/user-home'])
    })
  }

  //upload File
  @ViewChild('uploadFile', {static: true})
  public imageDom: ElementRef | undefined;

  selectedImage: any | null;

  // submit() {
  //   if (this.selectedImage != null) {
  //     const filePath = this.selectedImage.name;
  //     const fileRef = this.storage.ref(filePath);
  //     this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
  //       finalize(() => (fileRef.getDownloadURL().subscribe(url => {
  //         // this.arrayPicture = url;
  //         this.user.image = url;
  //         console.log(url);
  //       })))
  //     ).subscribe();
  //   }
  // }
  //
  // uploadFileImg() {
  //   this.selectedImage = this.imageDom?.nativeElement.files[0];
  //   this.submit();
  // }

}
