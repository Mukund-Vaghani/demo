import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // router: Router = new Router();
  error = '';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router){}
  async loginUser(): Promise<void> {
    var result = await fetch('http://localhost:8210/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(this.loginForm.value),
      headers: { 'Content-Type': 'application/json','api-key':'hyperlink' }
    })

    var response = await result.json()

    if (response.code === '1') {
      localStorage.setItem('token',response.dat[0].token);
      this.router.navigate(['/home']);
    } else if (response.code === '0') {
      this.error = response.message;
      alert(this.error);
    }
  }

}
