import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // data:any;
  error="";
  token = String(localStorage.getItem('token'));

  
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  constructor(private router: Router,private auth: AuthService){
    this.adsData();
    this.getData();
  }
  
  p:any;
  data:any=[];
  getData() {
    this.auth.getData().subscribe(
      (data) => {
        this.data = data;
        console.log(this.data)
      }
    );
  }

  async adsData(): Promise<void>{
    var result = await fetch('http://localhost:8210/api/v1/user/adslisting',{
      method:'POST',
      headers:{'Content-Type': 'application/json','api-key':'hyperlink','token':this.token}
    }
    ) 
    var response = await result.json()
    // console.log(response);

    if(response.code === '1'){
      this.data=response.dat
    }else if(response.code === '0'){
      this.error = response.message;
      alert(this.error);
    }


}
}
