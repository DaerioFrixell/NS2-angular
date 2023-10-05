import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FocusDirective } from './directives/focus.directive'
import { ClickStopPropagation } from './directives/clickStopPropagation.directive'
import { ProductFilterPipe } from './pipe/producrtFilter.pipe'
import { ButtonComponent } from './component/button/Button'
import { ProductComponent } from './component/product/Product'
import { ErrorComponent } from './component/error/error'
import { ModalComponent } from './component/modal/Modal'
import { CreateFormComponent } from './component/createForm/CreateForm'
import { AsdComponent } from './page/asd/Asd'
import { ProductListComponent } from './page/productList/ProductList'

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
    AsdComponent,
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
