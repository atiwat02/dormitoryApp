import { Component, OnInit } from '@angular/core';
import { NavController,IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  parcelall: any;
  time: any;
  day: any;


  constructor(public actroute: ActivatedRoute,public navCtrl:NavController, public http: HttpClient, private router: Router) { }

  ngOnInit() {
    var room_number = JSON.parse(localStorage.getItem("data")).username
    this.http.get("http://localhost:8080/api/parcels/"+room_number).subscribe(res => {
      console.log(res)
      this.parcelall = res
    })
  }

  parcel(item: any) {
    let parcel = JSON.stringify(item);
    this.router.navigate(["parcel", parcel]);


  }

  back(){
    this.navCtrl.pop();
  }

}