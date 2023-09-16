import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app'
import { ButtonComponent } from 'src/component/button/Button'
import { ProductComponent } from 'src/component/product/Product'
import { ProductListComponent } from 'src/page/productList/ProductList'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
