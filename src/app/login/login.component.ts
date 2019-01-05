import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFireAuth, private service: FirebaseService, private router: Router, private toastr: ToastrService) { }
  public error: string;
  public loginText = 'LOGIN';

  ngOnInit() {
    console.log('login called');
  }

  onSubmit(formData) {
    this.loginText = 'Logging..';
    const email = formData.value.email;
    const pwd = formData.value.password;

    this.af.auth.signInWithEmailAndPassword(email, pwd)
    .then(
        (success) => {
          this.toastr.success('Login success');
          console.log('refreshToken:' + success.user.refreshToken);
          localStorage.setItem('token', success.user.refreshToken);
          localStorage.setItem('email', email);
          this.router.navigate(['']);
          this.loginText = 'Login';
          window.location.reload();
         })
        .catch((err) => {
           console.log(err.message);
           this.loginText = 'Login';
           this.error = err.message;
          } );
  }


}
