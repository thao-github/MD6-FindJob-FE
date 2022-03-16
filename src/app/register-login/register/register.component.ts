import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SignUpFormUser} from "../../model/SignUpFormUser";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  statusUser = '';
  statusConfirmPassword = '';
  statusCompany = '';
  signUpFormUser!: SignUpFormUser;
  errorEmail: any = {
    message: "email_existed"
  }
  errorName: any = {
    message: 'name_existed'
  }
  success: any = {
    message: "yes"
  }

  registerFormUser = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'phoneNumber': new FormControl(null, Validators.required),
    'roles': new FormControl(['USER'])
  });


  constructor(private authService: AuthService,
              private storage: AngularFireStorage,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    const signUpFormUser = this.registerFormUser.value;
    // @ts-ignore
    const password = document.getElementById("user-password").value;
    // @ts-ignore
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password === confirmPassword) {
      this.authService.signUp(signUpFormUser).subscribe(data => {
        console.log("data == ", data);
        if (JSON.stringify(data) == JSON.stringify(this.errorEmail)) {
          this.statusUser = 'The email existed.'
        }
        if (JSON.stringify(data) == JSON.stringify(this.success)) {
          this.statusConfirmPassword = '';
          alert('Create Account SUCCESS.') ;
          this.router.navigate(['/login'])
        }
      })
    } else {
      this.statusConfirmPassword = 'Confirmation password does not match.';
    }
  }


  // COMPANY SIGN UP
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

  registerFormCompany = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'description': new FormControl(null, Validators.required),
    'avatar': new FormControl(null, Validators.required),
  });

  registerCompany() {
    const signUpCompany = this.registerFormCompany.value;
    signUpCompany.avatar = this.imgUrl
    this.authService.signUpCompany(signUpCompany).subscribe(data => {
      console.log("data ==> ", JSON.stringify(data));
      if (JSON.stringify(data) == JSON.stringify(this.errorName)) {
        this.statusCompany = 'The company name existed.'
      }
      if (JSON.stringify(data) == JSON.stringify(this.errorEmail)) {
        this.statusCompany = 'The email existed.'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        alert('Create Account SUCCESS.') ;
        this.router.navigate(['/login'])

      }
    }, error => {
      console.log(error)
    })
  }

  reload() {
    window.location.reload();
  }

  reset() {
    this.statusUser = '';
  }
}
