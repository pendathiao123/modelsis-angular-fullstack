import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductUpdateComponent } from './product/product-update.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { ProductAddComponent } from './product/product-add.component';
import { DatePipe } from '@angular/common';
import { AddProductTypeComponent } from './product/add-product-type.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductUpdateComponent,
    ProductListComponent,
    ProductAddComponent,
    AddProductTypeComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    RouterModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
