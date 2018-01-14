import { Component, OnInit, Input, NgModule, group } from '@angular/core';
import { Product } from '../classes';
import { ProductGroup } from '../classes';
import { ReceivedAmount } from '../classes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnChanges } from '@angular/core';




@Component({
  selector: 'app-add-received-amount',
  templateUrl: './add-received-amount.component.html',
  styleUrls: ['./add-received-amount.component.css']
})
export class AddReceivedAmountComponent implements OnInit {
  @Input()  productId3: number;
  constructor(private httpClient: HttpClient){}
  addShipmentUrl: string = 'http://pointfootapi.azurewebsites.net/api/shipmentsforproduct/'
  newShipment = new ReceivedAmount;
  
  submitReceivedAmount(){
    //console.log("add-received-amount:" + this.productId3)
    this.newShipment.productId = this.productId3;
    this.httpClient.post(this.addShipmentUrl,this.newShipment)
    .subscribe();
  }

  ngOnInit() {
    console.log("add-received-amount:" + this.productId3)
  }

}
