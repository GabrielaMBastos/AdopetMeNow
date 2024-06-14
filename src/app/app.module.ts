import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeLoginComponent } from './components/pages/home-login/home-login.component';
import { Header1Component } from './components/header-1/header-1.component';
import { Header2Component } from './components/header-2/header-2.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AltLayoutComponent } from './layouts/alt-layout/alt-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HomeLoginComponent,
    Header1Component,
    Header2Component,
    MainLayoutComponent,
    AltLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
