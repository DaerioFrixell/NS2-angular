import { Pipe, PipeTransform } from '@angular/core'
import { Products } from 'src/dataTypes/Product'

@Pipe({
  name: 'filterProduct',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Products, search: string): Products {
    return products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
  }
}
