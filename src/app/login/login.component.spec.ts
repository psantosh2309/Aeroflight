import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { combineLatest, of } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RestService } from '../rest.service';


import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let restServe : RestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule, ReactiveFormsModule, FormsModule,RouterTestingModule.withRoutes([{
        path:'dashbaord', component:DashboardComponent
      }]
      )],
      providers:[RestService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    restServe = TestBed.inject(RestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test login', fakeAsync(()=>{
    const data = [{
       "id": 1,
      "username": "Santosh Kumar",
      "email": "ps@gmail.com",
      "pwd": 12345678
      
    }]
    let spy = spyOn(restServe,'loginData').and.returnValue(of([]));
    let subspy = spyOn(restServe.loginData('Santosh Kumar','12345678'),'subscribe');
    component.onSubmit();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled;
    fixture.detectChanges;
    expect(component).toBeTruthy();
   
  }));

  it('should test validation',fakeAsync(()=>{
    const data = [{
      "id": 1,
     "username": "Santosh Kumar",
     "email": "ps@gmail.com",
     "pwd": 12345678
   }]
   let spy = spyOn(restServe,'loginData').and.returnValue(of(data));
   component.onSubmit();
   expect(component).toBeTruthy();
   expect(component.user).toBeDefined();;
  }));

  fit("should call alert", () => {
    const data = [{
      "id": 1,
     "username": "Santosh Kumar",
     "email": "ps@gmail.com",
     "pwd": 12345678
   }]
   let spy = spyOn(restServe,'loginData').and.returnValue(of(data));
   component.onSubmit();
   expect(component.user).toBeDefined();
   expect(component.user.length).not.toEqual(0);
   
 });  

 fit("should call else alert", () => {
 const elsedata = 0;
 let spy = spyOn(restServe,'loginData').and.returnValue(of(elsedata));
 component.onSubmit();
 //expect(component.user).toBeDefined();
 console.log("length",component.user.length);
 expect(elsedata).toEqual(0);


 
});  

  
});
