import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { RestService } from '../rest.service';
import { of } from 'rxjs';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let restserve: RestService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ DashboardComponent ],
      providers:[RestService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    restserve = TestBed.inject(RestService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create unit test for the ngONint', fakeAsync(()=>{
   let spy= spyOn(restserve,'getData').and.returnValue(of([]));
   let subspy = spyOn(restserve.getData(),'subscribe');
   component.ngOnInit();
   expect(spy).toHaveBeenCalledBefore(subspy);
   expect(subspy).toHaveBeenCalled();

   
  }))
  it('test case for card data', fakeAsync(()=>{
    const response = [{
      "id": 1,
      "name": "Aero Flot",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Aeroflot.svg",
      "code": "SU",
      "flightdata": [
        {
          "id": 1,
          "flightname": "A7AHL",
          "flightid": "UAE38",
          "arrival": "DFW",
          "departure": "LAX",
          "messagetime": "60347",
          "feet": "33",
          "landinghrs": "05",
          "operational": true,
          "nonoperational": false,
          "degret": false,
          "unknown": true,
          "status": "operational"
        }]
      }]
      let spy= spyOn(restserve, 'getData').and.returnValues(of(response));
      component.ngOnInit();
      expect(component.cardData).toBeDefined();
      expect(component.cardData.length).toEqual(1);


  }))
 
   it('checks the other method called or not ', () => {
    component.clickTag();
   component.onClick(1);
   component.clickTag1();
  expect(component).toBeTruthy();

  });
 
});


