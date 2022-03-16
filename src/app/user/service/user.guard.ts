import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate():boolean {
    // @ts-ignore
    let roles = JSON.parse(window.sessionStorage.getItem("token")).ROLE;
    // @ts-ignore
    for (const role of roles) {
      if(role.name == "USER"){
        return true;
      }
    }
    return false;

  }
}
