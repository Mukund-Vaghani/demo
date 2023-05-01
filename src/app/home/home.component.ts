import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any;
  error="";
  token = String(localStorage.getItem('token'));

  
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  constructor(private router: Router){
    this.adsData();
  }
  
  async adsData(): Promise<void>{
    var result = await fetch('http://localhost:8210/api/v1/user/adslisting',{
      method:'POST',
      headers:{'Content-Type': 'application/json','api-key':'empro28042023','token':this.token}
    }
    ) 
    var response = await result.json()
    console.log(response);

    if(response.code === '1'){
      this.data=response.dat
    }else if(response.code === '0'){
      this.error = response.message;
      alert(this.error);
    }
    
}
}
