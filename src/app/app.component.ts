import { Component, OnInit, Input, NgModule, OnChanges, group } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductGroup } from './classes';
import { Product } from './classes';
import {Http} from '@angular/http';
import {Response}  from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  @Input() groupId: number;
  title = 'Foot (title variable)';
  productGroupUrl: string='http://pointfootapi.azurewebsites.net/api/productgroup/';
  getProductsInGroupUrl: string='http://pointfootapi.azurewebsites.net/api/getproductsingroup/';
  
  constructor(private httpClient: HttpClient){}
  productGroupId: string ="0";
  productGroups: ProductGroup[];
  products: Product[];
  selectedProductGroup: Number;
  addGroup = new ProductGroup;
  //onProductGroupKeyUp(event: any){ this.productGroupId=event.target.value;  }

  productGroupRemoveUrl: string='http://pointfootapi.azurewebsites.net/api/removeproductgroup/';
  removeProductGroup(id: any){
      this.httpClient.get(this.productGroupRemoveUrl+id).subscribe();
    }

  getProductGroup(id: any){
    console.log(this.productGroupId);
    this.httpClient.get(this.productGroupUrl+id)
    .subscribe(
      (data:ProductGroup[]) => {
        console.log(data);
        this.productGroups=data;
      }
    )
  }

  submitGroupProduct(){
    this.addGroup.id = this.groupId;
    console.log("submitGroupProduct "+this.addGroup.id);
    this.httpClient.post(this.productGroupUrl,this.addGroup)
    .subscribe();
  }
  onSelect(productGroup: Number): void {
    this.selectedProductGroup=productGroup;
    console.log("app.component.ts onSelect:" + this.selectedProductGroup);
  }
  ngOnInit(): void {
    this.getProductGroup(0);
         
   } 
}
