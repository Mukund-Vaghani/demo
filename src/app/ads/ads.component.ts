import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  // router: Router = new Router();
  error = '';
  token = String(localStorage.getItem('token'));

  adsForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required])
  })

  get title(){
    return this.adsForm.get('title');
  }

  get description(){
    return this.adsForm.get('description');
  }
  get image(){
    return this.adsForm.get('image');
  }
  constructor(private router: Router){}
  async postAds(): Promise<void>{
    var result = await fetch('http://localhost:8210/api/v1/user/ads',{
    method:'POST',
    body:JSON.stringify(this.adsForm.value),
    headers:{'Content-Type': 'application/json','api-key':'hyperlink','token':this.token}
  }) 
  var response = await result.json()

  // console.log(response.code);
   if(response.code === '1'){
      this.router.navigate(['/home']);
    }else if(response.code === '0'){
      this.error = response.message;
      alert(this.error);
    }
  }
}
