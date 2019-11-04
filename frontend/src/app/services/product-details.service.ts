import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailsService {

  constructor(private _http: HttpClient) { }

  // temporary jason-server methods
  getProductInfo():Observable<any> {
    return this._http.get<any>("http://localhost:3000/posts/Kitty%20Cat");
  }

  addProductToCart(product):Observable<any> {
    return this._http.post<any>("http://localhost:3000/cart/",product,);
  }

  addProductToWishlist(product):Observable<any> {
    return this._http.post<any>("http://localhost:3000/wishlist/",product);
  }
  //////////////////////////////////////////////////////////////////////////
}
