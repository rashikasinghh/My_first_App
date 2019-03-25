import { IProduct } from './products';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'productFilter'
})

export class ProductFilter implements PipeTransform {
         transform(value: IProduct[], filterby: string): IProduct[] {
         filterby =  filterby ? filterby.toLocaleLowerCase() : null;
         return filterby ? value.filter((product: IProduct) =>
         product.brand.toLocaleLowerCase().indexOf(filterby) !== -1 ) : value;

         }
}