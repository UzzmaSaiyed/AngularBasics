import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './productt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // private _url: string = '/assets/data/product.json'
  // private _url: string = 'http://localhost:3000/api/product'
  private _url: string = 'https://product-api-chi-lake.vercel.app/api/product'


  constructor(private http: HttpClient) {

  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url)
  }
}
