import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
title = 'Product Detail Page';
constructor(private _route: ActivatedRoute) {}


ngOnInit(): void {
    const id = +this._route.snapshot.params['id'];
    this.title += `>>>> ${id} `; }
}
