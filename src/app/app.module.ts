import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from 'src/page/user/User';
import { ButtonComponent } from 'src/component/button/Button';
import { ProductComponent } from 'src/component/product/Product';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
