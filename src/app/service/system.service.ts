import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;

  constructor(private router: Router) { }

  // not applicable for bmdb as there is no 'admin' property on user
  // isAdmin(): boolean {
    // return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  // }

checkLogin(): void {
  // if user is not logged in, send to login page
  // comment out this code for testing purposes
  if (this.loggedInUser == null) {
    console.log("User is not logged in... redirecting to login.");
    this.router.navigateByUrl("/user-login");
  }
}
}

