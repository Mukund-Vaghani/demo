import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup, Validators} from '@angular/forms';
// import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'User Registration Form';
  // router: Router = new Router();
  error = '';

  registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    gender: new FormControl(''),
    confirmPassword: new FormControl('',[Validators.required]),
    image: new FormControl('')
  })

  get firstName(){
    return this.registerForm.get('firstName');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get userName(){
    return this.registerForm.get('userName');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  constructor(private router: Router){}

  async registerUSer(): Promise<void>{
    var result = await fetch('http://localhost:8210/api/v1/user/signup',{
    method:'POST',
    body:JSON.stringify(this.registerForm.value),
    headers:{'Content-Type': 'application/json','api-key':'empro28042023'}
  }) 
  var response = await result.json()

   if(response.code === '1'){
      this.router.navigate(['/login']);
    }else if(response.code === '0'){
      this.error = response.message;
      alert(this.error);
    }

}
}
