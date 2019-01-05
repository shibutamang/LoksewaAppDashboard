import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private af: AngularFireAuth, private router: Router, private service: FirebaseService) {}
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
