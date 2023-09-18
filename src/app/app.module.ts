import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app'
import { ButtonComponent } from 'src/component/button/Button'
import { ProductComponent } from 'src/component/product/Product'
import { ProductListComponent } from 'src/page/productList/ProductList'
import { ErrorComponent } from 'src/component/error/error'
import { ProductFilterPipe } from 'src/model/product/producrtFilter.pipe'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProductComponent,
    ProductListComponent,
    ErrorComponent,
    ProductFilterPipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
