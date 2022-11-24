import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user :any;
  // public myform = FormGroup;
  constructor(private fb : FormBuilder,private rest: RestService,private router : Router) { }
  
    myform = this.fb.group({
    username : ['',Validators.required],
    email : ['', Validators.required],
    pwd   : ['',Validators.required]
    });
  ngOnInit(): void {
  
  }

  onSubmit():any{
    this.rest.loginData(this.myform.value.username,this.myform.value.pwd).subscribe( 
      res =>{
       this.user = res;
       console.log(this.user);
      //   return a.username === this.myform.value.username 
      // });
      if(this.user.length>0){
       alert('login Success');
        this.myform.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert('User Not Found!');
      }
    })
  }

}
