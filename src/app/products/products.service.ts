import { IProduct } from './products';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()


export class ProductService {

private _productUrl = 'https://ngapi4.herokuapp.com/api/getProducts';

constructor(private _http: HttpClient) {}


    getProducts():  Observable<any> {
         return this._http.get(this._productUrl);
    }


}

