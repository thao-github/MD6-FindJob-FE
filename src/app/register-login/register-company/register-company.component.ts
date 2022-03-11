import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
//upload file
  selectedImg: any;
  imgUrl = '';

  @ViewChild('uploadFile', {static:true}) public avatarDom!: ElementRef;

  constructor(private authService: AuthService,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

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
  status= '';

  registerForm = new FormGroup({
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
  success: any = {
    message: "yes"
  }

  ngSubmit() {
    const signUpCompany = this.registerForm.value;
    signUpCompany.avatar = this.imgUrl
    console.log(signUpCompany);
    this.authService.signUpCompany(signUpCompany).subscribe(data => {
        console.log("data ==> ", JSON.stringify(data));
      if (JSON.stringify(data) == JSON.stringify(this.errorName)) {
        this.status = 'The company name existed.'
      }
        if (JSON.stringify(data) == JSON.stringify(this.errorEmail)) {
          this.status = 'The email existed.'
        }
        if (JSON.stringify(data) == JSON.stringify(this.success)) {
          this.status = 'Create Account Success!';
        }

      }, error => {
      console.log(error)
    })
    }


}
