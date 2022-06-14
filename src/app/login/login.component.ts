import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  login() {
    localStorage.removeItem('token');

    let email: string = this.loginForm.value.email;
    let password: string = this.loginForm.value.password;

    // if(!email || !password){
    //   alert('Please enter email and password.')
    //   return false;
    // }

    this.http
      .get(
        `http://localhost:3000/restaurants?email=${email}&password=${password}`
      )
      .subscribe((res: any) => {
        if (res[0]?.email) {
          localStorage.setItem('token', res[0].email);
          this.router.navigate(['/list']);
        } else {
          alert('Invalid credentials');
        }
      });

    return true;
  }
}
