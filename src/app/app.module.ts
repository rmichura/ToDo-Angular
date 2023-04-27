import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {ModalWindowComponent} from './components/home/modal-window/modal-window.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    RegisterComponent,
    ModalWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
