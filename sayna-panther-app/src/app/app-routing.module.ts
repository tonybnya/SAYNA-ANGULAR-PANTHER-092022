import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { HomeComponent } from './components/home/home.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartComponent } from './components/cart/cart.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CommandComponent } from './components/command/command.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'enigme', component:EnigmeComponent },
  { path:'wakanda', component:WakandaComponent },
  { path:'eshop', component:EshopComponent },
  { path:'moncompte', component:MonCompteComponent },
  { path:'cart', component:CartComponent },
  { path:'eshop/product/:id', component:SingleProductComponent },
  { path:'cart/command', component:CommandComponent },
  { path:'**', component:NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}