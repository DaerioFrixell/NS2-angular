import { Component } from '@angular/core'
import { mockProducts } from 'src/data/product/Products'
import { Products } from 'src/dataTypes/Product'
import { ModalService } from './service/modal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  allProduct: Products = mockProducts

  constructor(public modalService: ModalService) {}
}
