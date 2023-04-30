import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
})

clickb(){
  console.log('login buttton click');
  alert('hyy button clicked');
}

  loginUser() {
    console.log('get login user function');
    console.log(this.loginForm)
    console.warn(this.loginForm.value);
}
}
