import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: any;
  //  signupForm = FormGroup;
  
  constructor(private fb : FormBuilder, private router : Router, private rest : RestService) { }

  signupForm = this.fb.group({
    username : ['',Validators.required],
    email : ['', Validators.required],
    pwd   : ['',Validators.required],
    mobile    :['',Validators.required]
    });

  ngOnInit(): void {
  }

  signUp(){
    this.rest.postData(this.signupForm.value).subscribe(res => {
      this.data = res;
      alert("SignUp Successful");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }
    //   {
    //   next:(res)=>{
    //     this.data=res;
    //     alert("SignUp Successful");
    //   this.signupForm.reset();
    //   this.router.navigate(['login']);
    //   },error:()=>{
    //     alert("Something Went Wrong");

    //   }
    // }
    )
    
  }

}
