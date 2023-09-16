import { Component } from '@angular/core'
import { mockProducts } from 'src/data/product/Products'
import { Products } from 'src/dataTypes/Product'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  allProduct: Products = mockProducts
}
