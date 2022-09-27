import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  parcelall: any;
  Day: string;



  constructor(public http: HttpClient, public Nav: NavController, public router: Router) {

  }
  buttonClick() {
    console.log("home")

  }

  ngOnInit() {
    var room_number = JSON.parse(localStorage.getItem("data")).username
    console.log(room_number)
    this.http.get("http://localhost:8080/api/parcels/"+room_number).subscribe(res => {
      console.log(res)
      this.parcelall = res
    })
  }

  parcel(item: any) {
    let parcel = JSON.stringify(item);
    this.router.navigate(["parcel", parcel]);


  }
  logout(){
    localStorage.clear()
    this.router.navigate(["login"]);
  }





}
