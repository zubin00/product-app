import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  productList: any = [];
  categoryList: any = [];
  originalProductList: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchProduct();
    this.fetchCategories();
  }

  fetchProduct() {
    this.dataService.getProduct().subscribe(
      (res: any) => {
        this.productList = res;
        this.originalProductList = [...this.productList];
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  fetchCategories() {
    this.dataService.getCategories().subscribe(
      (res: any) => {
        this.categoryList = res;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  filterCategory(name: string) {
    this.productList = this.originalProductList.filter(
      (item: any) => item.category.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
