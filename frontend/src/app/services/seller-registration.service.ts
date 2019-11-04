import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller1 } from '../seller-registration/seller';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SellerRegistrationService {

  private add_url = 'http://15.206.62.131:8080/sellerProfile/api/v1/seller';
  constructor(private http: HttpClient) { }

  add(seller: Seller1): Observable<any>{
    return this.http.post<any>(this.add_url,seller,httpOptions);

  }
}
