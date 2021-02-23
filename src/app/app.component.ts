import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  hasil = 0;
  a=0;
  b=0;


item = [
  {nama : "Jeruk", harga : 15000, satuan: "kg"},
  {nama : "Apel", harga : 5000, satuan: "kg"},
  {nama : "Pisang", harga : 8000, satuan: "kg"},
  {nama : "Durian", harga : 12000, satuan: "kg"}
]

tampil : boolean = true;
tulisanopen : String;


OPEN() {
  this.tulisanopen="TOKOPEDIA";
  alert("dibuka!")
}
}