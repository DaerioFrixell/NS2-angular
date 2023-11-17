import { Component, Input } from '@angular/core'
import { Product } from 'src/dataTypes/Product'

@Component({
  selector: 'product-component',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
})
export class ProductComponent {
  @Input() product: Product
  
  public details = false;
}
