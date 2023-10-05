import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AsdComponent } from 'src/app/page/asd/Asd'
import { ProductListComponent } from './page/productList/ProductList'

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'asd', component: AsdComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
