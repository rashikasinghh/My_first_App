import { Component, OnInit } from '@angular/core';
import {IProduct} from './products';
import { ProductService } from './products.service';
@Component({
    selector: 'app-product-comp',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})



export class ProductComponent implements OnInit {
    title = '*** Product list***';
    showimage= false;
    filterProduct= '';
    imagewidth= 50;
    products: any;
    errorMessage: string;
    constructor( private _productService: ProductService ) {}
        ngOnInit(): void {
              this._productService.getProducts()
              .subscribe( (response: IProduct) => {
                  this.products = response;
            });
        }
        toggleimage(): void {
            this.showimage = !this.showimage ;
        }

        onRatingClicked(message: string): void {
              this.title = 'Product list::::::::' + message;
        }
}
