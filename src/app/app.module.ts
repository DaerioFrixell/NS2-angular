import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app'
import { ButtonComponent } from 'src/component/button/Button'
import { ProductComponent } from 'src/component/product/Product'
import { ProductListComponent } from 'src/page/productList/ProductList'
import { ErrorComponent } from 'src/component/error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProductComponent,
    ProductListComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
