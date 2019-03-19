import { Component } from '@angular/core';

@Component({
    selector: 'app-product-comp',
    templateUrl: './products.component.html'
})



export class ProductComponent {
    title = '*** Product list***';
    product: any[]= [
        {
            'id': 1,
            'brand': 'Ford',
            'model': 'Mustang',
            'year': 1985,
            'price': '1000',
            'starRating': ' ***'
        },
        {
            'id': 2,
            'brand': 'Nissan',
            'model': 'Altima',
            'year': 2017,
            'price': '2000',
            'starRating': '****'

        }
        ];
}
