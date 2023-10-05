import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app'
import { AsdComponent } from 'src/page/asd/Asd'
import { ProductListComponent } from 'src/page/productList/ProductList'

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'asd', component: AsdComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
