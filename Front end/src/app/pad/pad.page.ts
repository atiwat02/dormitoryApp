import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';
import { saveAs } from 'file-saver';
import { NavController, IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.page.html',
  styleUrls: ['./pad.page.scss'],
})
export class PadPage implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  canvasWidth: number;
  canvasHeight: number;
  id: string;

  constructor(private elementRef: ElementRef, public navCtrl: NavController,public actroute: ActivatedRoute,public http:HttpClient) { }

  ngOnInit(): void {
    this.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.init();
  }

  init() {
    const dataRev = this.actroute.snapshot.paramMap.get('id');
    let parcel = JSON.parse(dataRev);
    this.id = parcel
    console.log(parcel);
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(56,128,255)';
  }
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    // const url = window.URL.createObjectURL(blob);
    // saveAs(url, "dd"+'.png');

    // window.open(url);
    return blob;
  }

  save(): void {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const img = this.signaturePad.toDataURL();
    const base64 = img.split(',')[1];
    const imageName = uniqueSuffix + '.png';
    const imageBlob = this.dataURItoBlob(base64);
    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    console.log(imageFile)
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('id', this.id);
    this.http.post("http://localhost:8080/api/parcels/upday",formData).subscribe(res=>{
        console.log(res)})
    this.back()


    // console.log(atob(img.split(',')[1]))
    // this.base64ToGallery.base64ToGallery(img).then(
    //   res => console.log('Saved image to gallery ', res),
    //   err => console.log('Error saving image to gallery ', err)
    // );
  }


  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
    this.back()
  }
  back() {
    this.navCtrl.pop();
  }
}