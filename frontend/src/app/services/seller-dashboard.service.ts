import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SellerDashboardService {

  constructor(private _http: HttpClient) { }

  getFromDatabase (sellerEmail):Observable<any> {
    return this._http.get<any>(`http://15.206.62.131:8080/sellerProfile/api/v1/seller/${sellerEmail}`);
  }

  // saveToDatabase (bussinessData):Observable<any> {
  //   return this._http.post<any>('http://localhost:3000/posts/',bussinessData);
  // }

  updateToDatabase(seller):Observable<any> {
    return this._http.put<any>(`http://15.206.62.131:8080/sellerProfile/api/v1/seller`, seller);
  }


}
