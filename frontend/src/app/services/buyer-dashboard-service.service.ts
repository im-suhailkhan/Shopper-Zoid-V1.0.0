import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecommendation } from '../recommendation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerDashboardServiceService {
  
  private url:string="http://15.206.62.131:3000/posts";

  constructor(private http:HttpClient) { }

  getRecommendations():Observable<IRecommendation>{
    return this.http.get<IRecommendation>(this.url);
  }
}
