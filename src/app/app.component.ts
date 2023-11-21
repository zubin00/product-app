import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: any = [];
  categoryList: any = [];
  originalProductList: any[] = [];
  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.product();
    this.category();
  }

  product() {
    this.dataService.getProduct().subscribe((res: any) => {
      this.productList = res;
      this.originalProductList =this.productList;
    });
  }

  category() {
    this.dataService.getCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
  
  filterCategory(name: string) {
    
    this.productList= this.originalProductList.filter((item: any) => 
      item.category.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
