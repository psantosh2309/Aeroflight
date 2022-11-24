import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { RestService } from '../rest.service';
import { SignupComponent } from './signup.component';


fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let restServe : RestService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports:[HttpClientTestingModule,ReactiveFormsModule,FormsModule, RouterTestingModule.withRoutes([{
        path:"login", component:LoginComponent
      }])],
      providers :[RestService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    restServe = TestBed.inject(RestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test restServe', fakeAsync(()=>{
    const data = [{ "id": 1,
    "username": "Santosh Kumar",
    "email": "ps@gmail.com",
    "pwd": 12345678,
    "mobile": 1234567890

    }]
    let spy = spyOn(restServe,'postData').and.returnValue(of([]));
    let subspy = spyOn(restServe.postData(data),'subscribe');
    component.signUp();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  }))

  it('for response',()=>{
    const data = [{ "id": 1,
    "username": "Santosh Kumar",
    "email": "ps@gmail.com",
    "pwd": 12345678,
    "mobile": 1234567890

    }]
    let spy = spyOn(restServe,'postData').and.returnValue(of(data));
    component.signUp();
    expect(component.data).toEqual(data);
    
  })
});
