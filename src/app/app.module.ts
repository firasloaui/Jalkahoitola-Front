import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import {ProductListComponent} from './productlist/productlist.component';
import {ProductComponent} from './product/product.component';
import {AddProductComponent} from './addproduct/addproduct.component';
import {InterceptorModule} from './services/interceptor.module';
import {ReceivedAmountComponent} from './received-amount/received-amount.component';
import { AddReceivedAmountComponent } from './add-received-amount/add-received-amount.component';
import { ProductCountComponent } from './product-count/product-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    AddProductComponent,
    ReceivedAmountComponent,
    AddReceivedAmountComponent,
    ProductCountComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
