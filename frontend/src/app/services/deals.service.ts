import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class DealsService {

  private productsUrl: string;
 
  constructor(private http: HttpClient) {
    this.productsUrl = 'http://15.206.62.131:8086/api/v1/products';
  }
 
  public findAll(): any {
    console.log("hello from service");
    console.log(this.http.get(this.productsUrl));
    return this.http.get(this.productsUrl);

  }
 
  public save(product: any) {
    return this.http.post(this.productsUrl, product);
  }

  public findProduct(productName) {
    return this.http.get(`http://15.206.62.131:8086/api/v1/products/${productName}`);
  }

  public findProductByName(productName){
    return this.http.get(`http://15.206.62.131:8086/api/v1/product/name/${productName}`);
  }

  public findSellerById(productName,sellerId){
    return this.http.get(`http://15.206.62.131:8086/api/v1/products/${productName}/${sellerId}/`);
  }
}
