import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  condition:any = false;
   
  public cardData: any;
  
  constructor(private _rest : RestService ) { }

  ngOnInit():any{
    this._rest.getData().subscribe(
      data =>{
        this.cardData = data;
        console.log(this.cardData)
      }
    )
  }


  clickTag(){
    this.condition = true;
  }
  clickTag1(){
    this.condition = false;
  }
  onClick(id:any){
    //console.log("code",'"'+id+'"');
    localStorage.setItem("code",id);
    console.log(id);
  }
 
  

}
