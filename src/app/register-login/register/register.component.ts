import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SignUpFormUser} from "../../model/SignUpFormUser";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  statusUser= '';
  statusConfirmPassword= '';
  registerFormUser = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    'phoneNumber': new FormControl(null, Validators.required),
    'roles': new FormControl(['USER'])
  });

  error2: any = {
    message: "email_existed"
  }
  success: any = {
    message: "yes"
  }

  signUpFormUser!: SignUpFormUser;

  constructor(private authService: AuthService,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  registerUser() {
    const signUpFormUser = this.registerFormUser.value;
    // @ts-ignore
    const password = document.getElementById("user-password").value;
    console.log("p2==1",password)
    // @ts-ignore
    const confirmPassword = document.getElementById("confirm-password").value;
    console.log("p2==>", confirmPassword)
    if (password === confirmPassword) {
      console.log("oke")
      this.authService.signUp(signUpFormUser).subscribe(data => {
        console.log("data == ", data);
        if (JSON.stringify(data) == JSON.stringify(this.error2)) {
          this.statusUser = 'The email existed.'
        }
        if (JSON.stringify(data) == JSON.stringify(this.success)) {
          this.statusConfirmPassword = '';
          this.statusUser = 'Create Account Success.'
        }
      })
    } else {
      this.statusConfirmPassword = 'Confirmation password does not match.';
    }
    console.log(this.registerFormUser.value)
  }



  // COMPANY SIGN UP
  //upload file
  selectedImg: any;
  imgUrl = '';

  @ViewChild('uploadFile', {static:true}) public avatarDom!: ElementRef;

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

  // register
  statusCompany = '';

  registerFormCompany = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    'description': new FormControl(null, Validators.required),
    'avatar': new FormControl(null, Validators.required),
  });

  errorName: any = {
    message: 'name_existed'
  }

  errorEmail: any = {
    message: 'email_existed'
  }


  registerCompany() {
    const signUpCompany = this.registerFormCompany.value;
    signUpCompany.avatar = this.imgUrl
    console.log("signUpForm Value ===>",signUpCompany);
    this.authService.signUpCompany(signUpCompany).subscribe(data => {
      console.log("data ==> ", JSON.stringify(data));
      if (JSON.stringify(data) == JSON.stringify(this.errorName)) {
        this.statusCompany = 'The company name existed.'
      }
      if (JSON.stringify(data) == JSON.stringify(this.errorEmail)) {
        this.statusCompany= 'The email existed.'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.statusCompany = 'Create Account Success!';
      }

    }, error => {
      console.log(error)
    })
  }

}
