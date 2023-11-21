import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl='https://api.escuelajs.co/api/v1';
  constructor(public http:HttpClient) { }

  getProduct(){
    return this.http.get(`${this.apiUrl}/products`);
  }
  getCategories(){
    return this.http.get(`${this.apiUrl}/categories`);
  }
}
