import { Component, OnInit } from '@angular/core';
import {IProduct} from './products';
@Component({
    selector: 'app-product-comp',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})



export class ProductComponent implements OnInit {
    title = '*** Product list***';
    showimage= false;
    filterProduct= 'leaf';
    imagewidth= 50;
    product: IProduct[]= [
        {
            'id': 1,
            'brand': 'Ford',
            'model': 'Mustang',
            'year': 1985,
            'price': 1000,
            'starRating': 3.2,
            'imageUrl': 'https://image.ibb.co/fm778n/accord.jpg'
        },
        {
            'id': 2,
            'brand': 'Nissan',
            'model': 'Altima',
            'year': 2017,
            'price': 2000,
            'starRating': 4.5,
            'imageUrl': 'https://image.ibb.co/fm778n/accord.jpg',
        },

        {
        'id': 3,
        'brand': 'Ford',
        'model': 'Mustang',
        'year': 1985,
        'price': 1000,
        'starRating': 3.2,
        'imageUrl': 'https://image.ibb.co/fm778n/accord.jpg'
        }

        ];

        ngOnInit(): void {
              console.log( 'this is init' );

        }
        toggleimage(): void {
            this.showimage = !this.showimage 
        }
}
