import { Component } from '@angular/core';


@Component({
  selector: 'product-component',
  templateUrl: './product.html',
  styleUrls: ["./product.scss"]
})
export class ProductComponent {
  title = "product"
  anyField = "text from product"


}
