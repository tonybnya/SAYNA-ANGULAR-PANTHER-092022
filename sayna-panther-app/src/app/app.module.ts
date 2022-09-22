import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { HeroWakandaComponent } from './components/hero-wakanda/hero-wakanda.component';
import { HeroEnigmeComponent } from './components/hero-enigme/hero-enigme.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { MainWakandaComponent } from './components/main-wakanda/main-wakanda.component';
import { MainEnigmeComponent } from './components/main-enigme/main-enigme.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HeroEshopComponent } from './components/hero-eshop/hero-eshop.component';
import { MainEshopComponent } from './components/main-eshop/main-eshop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScrollbarComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    WakandaComponent,
    EnigmeComponent,
    EshopComponent,
    MonCompteComponent,
    HeroHomeComponent,
    HeroWakandaComponent,
    HeroEnigmeComponent,
    MainHomeComponent,
    MainWakandaComponent,
    MainEnigmeComponent,
    NotFoundPageComponent,
    HeroEshopComponent,
    MainEshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
