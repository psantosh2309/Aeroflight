import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestService } from './rest.service';

describe('RestService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  fit('unit test for postData',()=>{

    expect(service.postData({
      "username": "Santosh kumar",
      "email": "Ps@gmail.com",
      "pwd": "1234",
      "mobile": "1234567890",
      
    })).toBeTruthy();
  })

  fit('unit test for logindata',()=>{

    expect(service.loginData('Santosh kumar','1234')).toBeTruthy();
  })

});
