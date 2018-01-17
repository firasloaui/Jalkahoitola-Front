import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../classes';
import { ProductGroup } from '../classes';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductListComponent implements OnChanges{
  @Input() groupId: string;
  
  constructor(private httpClient: HttpClient){}
  getProductsInGroupUrl: string='http://pointfootapi.azurewebsites.net/api/getproductsingroup/';
  products: Product[];
  selectedProduct: Product;
  
  
  productRemoveUrl: string='http://pointfootapi.azurewebsites.net/api/removeproduct/';
  removeProduct(id: any){
      this.httpClient.get(this.productRemoveUrl+id).subscribe();
      if(this.groupId != undefined){
        setTimeout(() => this.getProductsInGroup(this.groupId),1000);
     }
    }

   
  getProductsInGroup(id: any){
    this.httpClient.get(this.getProductsInGroupUrl+id)
    .subscribe(
      (data: Product[])=> {
        this.products=data;
      }
    )
  }
  onProductSelect(product: Product){
    this.selectedProduct=product;
  }
 ngOnChanges(): void{
  if(this.groupId != undefined){
    this.getProductsInGroup(this.groupId);
   }
 }
 
  ngOnInit(): void {
    if(this.groupId != undefined){
    this.getProductsInGroup(this.groupId);
    }

  }
  
}