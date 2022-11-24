import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
declare var window: any;

@Component({
  selector: 'app-aero',
  templateUrl: './aero.component.html',
  styleUrls: ['./aero.component.css']
})
export class AeroComponent implements OnInit {


  dummyItems: any = [];
  getflightid: any;
  getallData: any;
  resdata: any;
  restdata: any;
  count: any;
  markers: any;
  data: any;
  driversList: any;
  // lat = 13.082680;
  // lng = 78.486671;
  lat:any;
  lng:any;
  zoom: number = 5;
  timer: any;
  index: any = 0;

  // showMap: boolean;
  modalShow = false;
  zoneIsClicked: any;
  formModal: any;
  newdata: any;
  val: any;


  constructor(private _rest: RestService) {
    // this.showMap = false;
  }

  addClickEvent(val: any, id: any): any {
    this.dummyItems = [];
    this.markers = [];
    this.data = [];
    this.index = 0;
    this._rest.getData().subscribe(res => {
      this.restdata = res;
      console.log(this.restdata);
      for (var dat of this.restdata) {
        if (dat.flightdata.length > 0) {
          for (var flightdat of dat.flightdata) {
            console.log(flightdat)
            if (flightdat.id == id) {
              this.lat = flightdat.Currentloc.lat;
              this.lng = flightdat.Currentloc.lng;
              if (flightdat.markers.length > 0) {
                this.markers = flightdat.markers;
              }
              if (flightdat.driversList.length > 0) {
                this.data = flightdat.driversList;
                console.log("data", this.data[0]);
                if (this.data) {
                  this.dummyItems = this.data[0];
                }
                this.timer = setInterval(() => {
                  if (this.index < this.data.length) {
                    this.dummyItems = this.data[this.index];
                    this.index++;
                  }
                }, 4000)
              }

            }
          }
        }
      }

    });
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    // );
    // if (val.type === 'mouseenter') {
    //   this.formModal.show();
    // }
    // else {
    //   this.formModal.hide();
    // }
  }

  ngOnInit(): void {
    this.getservedata();
 }

  getservedata() {
    this._rest.getData().subscribe(data => {
     this.getallData = data;
    this.getflightid = localStorage.getItem("code");
    console.log(this.getflightid);
     for (let newdata of this.getallData) {
        if (newdata.id == this.getflightid) {
          if (newdata.flightdata) {
            this.resdata = newdata.flightdata;
            this.count = this.resdata.length;
      }
        }
      }
    })
  }



}
