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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ModalComponent } from 'src/component/modal/Modal'
import { CreateFormComponent } from 'src/component/createForm/CreateForm'
import { FocusDirective } from './directives/focus.directive'
import { ClickStopPropagation } from './directives/clickStopPropagation.directive'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProductComponent,
    ProductListComponent,
    ErrorComponent,
    ProductFilterPipe,
    ModalComponent,
    CreateFormComponent,
    FocusDirective,
    ClickStopPropagation,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
