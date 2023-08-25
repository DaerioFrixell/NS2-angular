import { Component } from '@angular/core';
import { products } from 'src/data/product/Products';
import { Products } from 'src/dataTypes/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent {

  allProduct: Products = products
}
