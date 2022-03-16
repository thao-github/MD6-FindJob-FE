import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from "../service/company.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Company} from "../model/company";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  company!: Company;
  id!: number;
  status: any;
  companyForm = new FormGroup({
    'id': new FormControl(null, Validators.required),
    'companyCode': new FormControl(null, Validators.required),
    'fieldOfActivity': new FormControl(null, Validators.required),
    'numberOfEmployees': new FormControl(null, Validators.required),
    'phoneNumber': new FormControl(null, Validators.required),
    'address': new FormControl(null, Validators.required),
    'branch': new FormControl(null, Validators.required),
    'avatar': new FormControl(null, Validators.required),
    'description': new FormControl(null, Validators.required),
  })

  constructor(private companyService: CompanyService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = window.sessionStorage.getItem('company');
    this.companyService.findCompanyById(this.id).subscribe((data) => {
      this.company = data;
      console.log('company--->', this.company);

      this.companyForm = new FormGroup({
        'id': new FormControl(this.company.id),
        'companyCode': new FormControl(this.company.companyCode),
        'fieldOfActivity': new FormControl(this.company.fieldOfActivity),
        'numberOfEmployees': new FormControl(this.company.numberOfEmployees),
        'phoneNumber': new FormControl(this.company.phoneNumber),
        'address': new FormControl(this.company.address),
        'branch': new FormControl(this.company.branch),
        'avatar': new FormControl(this.company.avatar),
        'description': new FormControl(this.company.description),
      })
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


  editCompanyInfo() {
    const company = this.companyForm.value;
    this.companyService.editCompanyInfo(company).subscribe(()=>{
      this.status = 'Edit SUCCESS.'
    }, error => {
      console.log(error)
    })
  }
}
