import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule } from '@angular/router';
import { ProductComponent } from './products/products.components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/products.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: ' ', redirectTo: 'home', pathMatch: 'full' },
      {path: '***', component: NotFoundComponent}





    ])
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilter,
    StarComponent,
    ProductDetailComponent,
    OrderComponent,
    NotFoundComponent,
    HomeComponent

  ],
bootstrap: [AppComponent],

providers: [
  ProductService
]

})
export class AppModule { }
