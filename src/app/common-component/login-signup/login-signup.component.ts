import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { login } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder) {

  }

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('')
    })
  }

  loginFormData = {
    email: '',
    password: ''
  };

  signupFormData = {
    name: '',
    email: '',
    password: ''
  };

  login() {
    console.log('Login form submitted:', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res: login) => {
      console.log(res);
      if(res.success){
        console.log(res.message);
        localStorage.setItem('Token',res.token)
      }
    },err=>{
      console.log(err.error.msg);
      
    })
  }

  signup() {
    console.log('Signup form submitted:', this.signupFormData);
    // Add logic to handle signup
  }

  isLogin: boolean = true;
  auth() {
    this.isLogin = !this.isLogin;
  }
}

