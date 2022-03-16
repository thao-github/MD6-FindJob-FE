// import { Injectable } from '@angular/core';
// import {CanActivate, Router} from '@angular/router';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserGuard implements CanActivate {
//
//   constructor(private router:Router) {
//   }
//   canActivate():boolean  {
//     // @ts-ignore
//     if(!JSON.parse(sessionStorage.getItem("user")).isCompany){
//       return true;
//     }else {
//       this.router.navigate(["login"]);
//       return false;
//     }
//
//   }
// }
