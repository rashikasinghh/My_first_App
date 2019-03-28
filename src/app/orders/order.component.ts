import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
templateUrl: './order.component.html'
})

export class OrderComponent {
    title: 'Order List ';

orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contact: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('')
});

Submit() {
    const form = this.orderForm.value;
    console.log(form);
}
}
