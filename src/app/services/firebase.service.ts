import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private af: AngularFireAuth) { }

  private email: string;
  private pwd: string;

  login(email, pwd) {
    this.af.auth.signInWithEmailAndPassword(email, pwd)
    .then(
        (success) => {
          console.log('login success');
       })
        .catch((err) => { console.log('error'); } );
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
 }

}
