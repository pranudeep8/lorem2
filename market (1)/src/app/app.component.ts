import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { Service } from '../service/service';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: Service) {

  }
  title = 'market';
  cusip = '';
  bonds = [];
  btnText = 'See CUSIPs';
  maturedBonds = [];
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  fromDate = new Date().toISOString();
  toDate = new Date().toISOString();
  cusipType = '';
  showData = false;
  getCusipByDate() {
    if(this.cusipType && (this.fromDate && this.toDate)) {
    console.log(new Date(this.fromDate).toISOString(),this.cusipType);  this.service.getData('http://localhost:4900/feed/getByDate', {type:this.cusipType,fromDate:new Date(this.fromDate).toISOString(),toDate:new Date(this.toDate).toISOString()}).subscribe((res:any[]) => {
      this.maturedBonds = res;
      this.btnText = 'See '+res['prodcuts'].length+' CUSIPs';
      
    })
  }
  }
  
  getCusip() {
    this.service.getData('http://localhost:4900/feed/post', {cusip:this.cusip}).subscribe((res:any[]) => {
      this.bonds = res;
    })
  }
  validateData() {
    if (this.maturedBonds['prodcuts'].length>0)
    this.showData = true;
  }
}
