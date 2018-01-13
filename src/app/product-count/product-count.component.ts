import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ProductGroup } from '../classes';
//import { Product } from '../classes';
//import {Http} from '@angular/http';
//import {Response}  from '@angular/http';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  @Input() productId4: string;
    constructor(private httpClient: HttpClient){}
    productCountUrl: string='http://pointfootapi.azurewebsites.net/api/productcount/';
    productCount: number;
    getProductCount(){
      this.httpClient.get(this.productCountUrl+this.productId4)
      .subscribe(
        (data: number)=> {
          //console.log(data);
          this.productCount=data;
        }
        )
      }        

    

  ngOnInit() {
    if(this.productId4 != undefined){
    this.getProductCount();
    }
  }

}
