import { Component, OnInit } from '@angular/core'
import { ProductServiceRequest } from 'src/app/service/product.service'

@Component({
  selector: 'productList-component',
  templateUrl: './productList.html',
  styleUrls: ['./productList.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductServiceRequest) {}

  // allProducts$: Observable<Products>

  loading = false

  term = ''

  ngOnInit() {
    this.loading = true
    // this.allProducts$ = this.productService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)))

    this.productService.getAll().subscribe((_) => {
      this.loading = false
    })
  }
}
