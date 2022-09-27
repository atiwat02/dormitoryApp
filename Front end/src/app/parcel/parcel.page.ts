import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonSlides } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.page.html',
  styleUrls: ['./parcel.page.scss'],
})
export class ParcelPage implements OnInit {
  [x: string]: any;
  id:string;
  name: string;
  company: string;
  parcel_number: string;
  room_number: string;
  Day: string;
  imge: string;
  recipient: string;
  status:string;
  role:string;
  up_day:string;




  constructor(public alertController: AlertController, public actroute: ActivatedRoute, public navCtrl: NavController, private router: Router,private common: CommonModule) { }

  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem("data")).role
    const dataRev = this.actroute.snapshot.paramMap.get('sendid');
    let parcel = JSON.parse(dataRev);
    console.log(parcel);
    this.id = parcel['id'];
    this.name = parcel['name'];
    this.company = parcel['company'];
    this.parcel_number = parcel['parcel_number'];
    this.room_number = parcel['room_number'];
    this.Day = parcel['Day'].split("T")[0];
    this.recipient = parcel['recipient'];
    this.imge = parcel['imge'];
    this.status = parcel['status'];
    this.up_day = parcel['up_day']===null?"":parcel['up_day'].split("T")[0];





  }

  async Create() {
    console.log("add");

    this.router.navigate(["pad/"+this.id]);
  }
  back() {
    this.navCtrl.pop();
  }




}