import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FocusDirective } from '../directives/focus.directive'
import { ClickStopPropagation } from '../directives/clickStopPropagation.directive'
import { ProductFilterPipe } from '../pipe/producrtFilter.pipe'
import { ButtonComponent } from '../component/button/Button'
import { ProductComponent } from '../component/product/Product'
import { ErrorComponent } from '../component/error/error'
import { ModalComponent } from '../component/modal/Modal'
import { CreateFormComponent } from '../component/createForm/CreateForm'
import { ProductListComponent } from '../page/productList/ProductList'
import { MainPageComponent } from '../page/main/mainPage.component';
import { RoutingModule } from './routing/routing.module';
import { TitleUiComponent } from '../component/title/title.component';
import { LinksUiComponent } from '../component/links/links.component';

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
    MainPageComponent,
    TitleUiComponent,
    LinksUiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
