import { Component, OnInit, Input, NgModule, OnChanges, group } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductGroup } from './classes';
import { Product } from './classes';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  @Input() groupId: number;
  title = 'Foot (title variable)';
  productGroupUrl: string = 'http://pointfootapi.azurewebsites.net/api/productgroup/';
  getProductsInGroupUrl: string = 'http://pointfootapi.azurewebsites.net/api/getproductsingroup/';

  constructor(private httpClient: HttpClient) { }
  productGroupId: string = "0";
  productGroups: ProductGroup[];
  products: Product[];
  selectedProductGroup: Number;
  addGroup = new ProductGroup;
  //onProductGroupKeyUp(event: any){ this.productGroupId=event.target.value;  }

  productGroupRemoveUrl: string = 'http://pointfootapi.azurewebsites.net/api/removeproductgroup/';
  removeProductGroup(id: any) {
    if (confirm("Oletko varma että haluat poistaa tuoteryhmän?")) {
      this.httpClient.get(this.productGroupRemoveUrl + id).subscribe();
      setTimeout(() => this.getProductGroup(0), 1000);
    }
  }
  getProductGroup(id: any) {
    console.log(this.productGroupId);
    this.httpClient.get(this.productGroupUrl + id)
      .subscribe(
      (data: ProductGroup[]) => {
        console.log(data);
        this.productGroups = data;
      }
      )
  }
  submitGroupProduct() {
    this.addGroup.id = this.groupId;
    this.httpClient.post(this.productGroupUrl, this.addGroup).subscribe();
    setTimeout(() => this.getProductGroup(0), 1000);
    alert("Tuoteryhmä lisätty onnistuneesti");
  }
  onSelect(productGroup: Number): void {
    this.selectedProductGroup = productGroup;
  }
  ngOnInit(): void {
    this.getProductGroup(0);
  }
}
