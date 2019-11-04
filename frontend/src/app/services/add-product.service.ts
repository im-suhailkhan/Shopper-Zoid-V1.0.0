import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class SearchComp{
  productName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  searchComp:SearchComp={
    productName:''
  };
  constructor(private http:HttpClient) { }

  addProduct(product:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(product);    
    return this.http.post<any>('http://15.206.62.131:8080/product/api/v1/product',JSON.stringify(product),httpOptions);
  }

  addBook(book:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>('http://15.206.62.131:8080/product/api/v1/book',JSON.stringify(book),httpOptions);
  }

 searchProduct(productName):any{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
   return this.http.post<any>(`http://15.206.62.131:8080/product/api/v1/product/details?productName=${productName}`,httpOptions);
 } 

 updateProduct(product,seller){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
    console.log(seller);
    console.log(product);
    
    
   return this.http.put<any>(`http://15.206.62.131:8080/product/api/v1/product?productName=${product.productName}`,JSON.stringify(seller),httpOptions);
 }


}
