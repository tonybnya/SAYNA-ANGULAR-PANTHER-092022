import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ApiArticlesService } from 'src/app/services/api-articles.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page: number = 1;
  public articles: any;
  isAdded: boolean = false;

  constructor(private api: ApiArticlesService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => { 
      this.articles = res;
      this.articles.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.prix });
      });
    });
  }

  addToCart(article: any) {
    this.cartService.addToCart(article);
    this.router.navigateByUrl('cart');
  }

}
