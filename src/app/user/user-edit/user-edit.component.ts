import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Users} from "../model/users";
import {UserService} from "../service/userService";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: Users[] = [];
  status: any;

  userForm = new FormGroup({
    'id': new FormControl(null),
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
    'cv': new FormControl(null, Validators.required),
    'phoneNumber': new FormControl(null, Validators.required),
    'address': new FormControl(null, Validators.required),
    'avatar': new FormControl(null, Validators.required),
  })
  id!: number;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log('id===>', this.id);

    })
  }

  ngOnInit(): void {
    this.findUserById(this.id);

    console.log("id oninit", this.id)
  }

  findUserById(id: number) {
    return this.userService.findUserById(id).subscribe((user) => {
      console.log('editPost ===>', user);
      this.user = user;
      this.userForm = new FormGroup({
        'id': new FormControl(user.id),
        'name': new FormControl(user.name),
        'email': new FormControl(user.email),
        'password': new FormControl(user.password),
        'cv': new FormControl(user.cv),
        'phoneNumber': new FormControl(user.phoneNumber),
        'address': new FormControl(user.address),
        'avatar': new FormControl(user.avatar),
      })
    }, error => {
      console.log(error);
    })
  }

  saveChanges(id: number) {
    const user = this.userForm.value;
    this.userService.updateUser(id, user).subscribe((user) => {
      this.status = "User UPDATED."
      alert("update sucess ^_^")
    }, error => {
      console.log(error)
    })
  }

  //upload File

  @ViewChild('uploadFile', {static: true})
  public imageDom: ElementRef | undefined;

  selectedImage: any | null;

  imgUrl = '';

  submit() {
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe((url: string) => {
          this.imgUrl = url;
          console.log(url);
        })))
      ).subscribe();
    }
  }

  uploadFileImg() {
    this.selectedImage = this.imageDom?.nativeElement.files[0];
    this.submit();
  }
}



