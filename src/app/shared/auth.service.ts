import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient) { }
  // constructor() { }
  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getData() {
    return this.httpService.get('http://localhost:8210/api/v1/user/adslisting');}

}
