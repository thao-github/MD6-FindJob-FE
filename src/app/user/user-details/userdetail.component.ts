import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../service/userService";
import {Users} from "../../model/users";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-details',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: Users;
  id!: number;
  oldAvatar: any;

  userForm = new FormGroup({
    'id': new FormControl(null, Validators.required),
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, Validators.required),
    'phoneNumber': new FormControl(null, Validators.required),
    'address': new FormControl(null, Validators.required),
    'avatar': new FormControl(null, Validators.required),
  });

  constructor(private userService: UserService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = window.sessionStorage.getItem('user');
    this.findUserById(this.id);
  }

  findUserById(id: number) {
    this.userService.findUserById(id).subscribe((user) => {
      this.user = user;
      console.log('user--->', user)
      this.userForm = new FormGroup({
        'id': new FormControl(user.id),
        'name': new FormControl(user.name),
        'email': new FormControl(user.email),
        'phoneNumber': new FormControl(user.phoneNumber),
        'address': new FormControl(user.address),
        'avatar': new FormControl(user.avatar)
      })
      this.imgUrl = this.user.avatar;
    })
  }

  selectedImg: any;
  imgUrl = '';
  @ViewChild('uploadFile', {static: true}) public avatarDom!: ElementRef;

  uploadFileImg() {
    this.selectedImg = this.avatarDom?.nativeElement.files[0];
    this.submit();
  }

  submit() {
    if (this.selectedImg != null) {
      const filePath = this.selectedImg.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.imgUrl = url;
          console.log(url);
        })))
      ).subscribe();
    }
  }

  editUser(id: number) {
      this.userForm.value.avatar = this.imgUrl;
      const user = this.userForm.value;
      this.userService.updateUser(id, user).subscribe(() => {
        alert('User UPDATED.');
        window.location.reload();
      })
    }
}
