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
    HeroEnigmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
