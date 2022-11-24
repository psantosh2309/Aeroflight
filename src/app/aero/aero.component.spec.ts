import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AeroComponent } from './aero.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RestService } from '../rest.service'
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { compileComponentFromMetadata } from '@angular/compiler';


fdescribe('AeroComponent', () => {
  let component: AeroComponent;
  let fixture: ComponentFixture<AeroComponent>;
  let restservice : RestService;
  let response:any;
  let responsedata:any


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        ],
      providers: [RestService],
      declarations: [AeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    restservice = TestBed.inject(RestService)

    response = [
      {
        "id": 1,
        "name": "Aero Flot",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Aeroflot.svg",
        "code": "SU",
        "flightdata": [
          {
            "id": 1,
            "flightname": "A7AHL",
            "flightid": "UAE38",
            "arrival": "HYD",
            "departure": "CHE",
            "messagetime": "60347",
            "feet": "33",
            "landinghrs": "05",
            "operational": true,
            "nonoperational": false,
            "degret": false,
            "unknown": true,
            "status": "operational",
            "Currentloc": {
              "lat": 13.08268,
              "lng": 80.270721
            },
            "markers": [
              {
                "lat": 13.08268,
                "lng": 80.270721,
                "label": "Chennai"
              },
              {
                "lat": 17.385044,
                "lng": 78.486671,
                "label": "Hyderabad"
              }
            ],
            "driversList": [
              {
                "lat": 13.33227,
                "lng": 80.198929,
                "label": "ponneri"
              },
              {
                "lat": 14.146319,
                "lng": 79.850388,
                "label": "v"
              },
              {
                "lat": 17.385044,
                "lng": 78.486671,
                "label": "Hyderabad"
              }
            ]
          }
        ]
      }
    ]
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });



// fit('unit test for openmodalform',fakeAsync(()=>{

//   let data = spyOn(restservice,'getData').and.returnValue(of([]));
//   let subdata = spyOn(restservice.getData(),'subscribe');
//   tick();
//   component.addClickEvent('mouseenter',1);
//   expect(data).toHaveBeenCalledBefore(subdata);
//   expect(subdata).toHaveBeenCalled();
// }));




fit('unit test for openmodalform value assign',fakeAsync(()=>{
  let data = spyOn(restservice,'getData').and.returnValue(of(response));
 component.addClickEvent('mouseenter',1);
 expect(component.restdata).toBeDefined();
 console.log("result",component.resdata);

 setInterval(() => {
    }, 4000);
  tick(4000);
  discardPeriodicTasks();
}));

//  fit('test case for formModal', ()=>{
//   component.addClickEvent(1,'mouseenter');
//   component.val.type='mouseenter';
//   expect(component.val.type).toEqual('mouseenter');

//  });

fit('should create unit test for the ngONint', fakeAsync(()=>{
  let spy= spyOn(restservice,'getData').and.returnValue(of([]));
  let subspy = spyOn(restservice.getData(),'subscribe');
  component.ngOnInit();
  expect(spy).toHaveBeenCalledBefore(subspy);
  expect(subspy).toHaveBeenCalled();


 }))
fit('unit test case for getServedata',fakeAsync(()=>{
  let spy = spyOn(restservice,'getData').and.returnValue(of([]));
  let subspy = spyOn(restservice.getData(),'subscribe');
  tick();
  component.ngOnInit();
  expect(spy).toHaveBeenCalledBefore(subspy);
  expect(subspy).toHaveBeenCalled();

}))

fit('unit test case for getServedata',fakeAsync(()=>{
  const responsedata = [
    {
      "id": 1,
      "name": "Aero Flot",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Aeroflot.svg",
      "code": 'SU',
      "flightdata": [
        {
          "id": 1,
          "flightname": "A7AHL",
          "flightid": "UAE38",
          "arrival": "HYD",
          "departure": "CHE",
          "messagetime": "60347",
          "feet": "33",
          "landinghrs": "05",
          "operational": true,
          "nonoperational": false,
          "degret": false,
          "unknown": true,
          "status": "operational",
          "Currentloc": {
            "lat": 13.08268,
            "lng": 80.270721
          },
          "markers": [
            {
              "lat": 13.08268,
              "lng": 80.270721,
              "label": "Chennai"
            },
            {
              "lat": 17.385044,
              "lng": 78.486671,
              "label": "Hyderabad"
            }
          ],
          "driversList": [
            {
              "lat": 13.33227,
              "lng": 80.198929,
              "label": "ponneri"
            },
            {
              "lat": 14.146319,
              "lng": 79.850388,
              "label": "v"
            },
            {
              "lat": 17.385044,
              "lng": 78.486671,
              "label": "Hyderabad"
            }
          ]
        }
      ]
    }
  ]

  let spy = spyOn(restservice,'getData').and.returnValue(of(responsedata));
   component.ngOnInit();
  // component.getflightid= 'SU';
  expect(component.getallData).toBeDefined();
  console.log('code',component.getallData[0].code);
  expect(component.getallData[0].code).toEqual('SU');


}))






});
