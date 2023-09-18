import { Component, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { Products } from 'src/dataTypes/Product'
import { ProductService } from 'src/model/product/product.service'

@Component({
  selector: 'productList-component',
  templateUrl: './productList.html',
  styleUrls: ['./productList.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  allProducts$: Observable<Products>

  loading = false

  term = ''

  ngOnInit() {
    this.loading = true
    this.allProducts$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)))
  }
}
