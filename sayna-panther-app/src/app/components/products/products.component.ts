import { Component, OnInit } from '@angular/core';
import { ApiArticlesService } from 'src/app/services/api-articles.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page: number = 1;
  public articles: any;

  constructor(private api: ApiArticlesService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => { 
      this.articles = res;
    });
  }

}
