import { Component, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { ProductServiceRequest } from 'src/app/service/product.service'
import { Products } from 'src/dataTypes/Product'

@Component({
  selector: 'productList-component',
  templateUrl: './productList.html',
  styleUrls: ['./productList.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductServiceRequest) {}

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
