import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from '../../page/productList/ProductList'

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'anyForm', component: ProductListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
