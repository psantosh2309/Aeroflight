import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  getData():Observable<any[]>{
    return this._http.get<any[]>("http://localhost:3000/posts");
  }
  
  postData(data:any){
    return this._http.post<any>("http://localhost:3000/signupUsers",data);
  }
  
   loginData(Username:any,Password:any){
    return this._http.get<any>("http://localhost:3000/signupUsers/?username="+Username+"&pwd="+Password);
  }

}
