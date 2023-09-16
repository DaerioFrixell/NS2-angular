import { Component } from '@angular/core'
import { mockProducts } from 'src/data/product/Products'
import { Products } from 'src/dataTypes/Product'

@Component({
  selector: 'productList-component',
  templateUrl: './productList.html',
  styleUrls: ['./productList.scss'],
})
export class ProductListComponent {
  allProduct: Products = mockProducts
}
