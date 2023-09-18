import { Component, OnInit } from '@angular/core'
import { mockProducts } from 'src/data/product/Products'
import { Products } from 'src/dataTypes/Product'
import { ProductService } from 'src/model/product/product.service'

@Component({
  selector: 'productList-component',
  templateUrl: './productList.html',
  styleUrls: ['./productList.scss'],
})
export class ProductListComponent implements OnInit {
  allProducts: Products = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe((getAllProducts) => {
      this.allProducts = getAllProducts
    })
  }
}
