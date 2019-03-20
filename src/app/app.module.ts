import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/products.components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductFilter } from './products/product-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilter

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
