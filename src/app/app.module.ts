import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { CimsorComponent } from './cimsor/cimsor.component';
import { MenuComponent } from './menu/menu.component';
import { LoginAblakComponent } from './login-ablak/login-ablak.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { TermekekComponent } from './termekek/termekek.component';
import { FormsModule } from '@angular/forms';
import { LogoutAblakComponent } from './logout-ablak/logout-ablak.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    LablecComponent,
    CimsorComponent,
    MenuComponent,
    LoginAblakComponent,
    FooldalComponent,
    ElerhetosegekComponent,
    TermekekComponent,
    LogoutAblakComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
