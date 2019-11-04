import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { DealsService } from '../services/deals.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SellerDashboardService } from '../services/seller-dashboard.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product:any;
  private seller:any;
  private searchProductName: string;
  private sellerId: string;

  constructor(private _sellerDashboardService: SellerDashboardService, private route: ActivatedRoute, private _dealsService : DealsService, private _productDetailsService: ProductDetailsService) { }

  ngOnInit() {
    // this._productDetailsService.getProductInfo().subscribe(response=>
    //   { 
    //     this.product = response;
    //     console.log(this.product);
    //   }
    // );
    
    this.route.paramMap.subscribe((params:ParamMap)=> 
      {
        this.sellerId = params.get('sellerId');
        this.searchProductName = params.get('searchProductName');
        console.log(this.sellerId);
        console.log(this.searchProductName);
      }
    );
    
    this._dealsService.findProductByName(this.searchProductName).subscribe(response=>
      {
        this.product = response;
        console.log(this.product);
      }  
    );
    this._dealsService.findSellerById(this.searchProductName,this.sellerId).subscribe(response=>
      {
        this.seller = response;
        console.log(this.seller);   
      }  
    );
  }

  // addToCart(){
  //   this._productDetailsService.addProductToCart(this.product).subscribe();
  // }

  // addToWishlist(){
  //   this._productDetailsService.addProductToWishlist(this.product).subscribe();
  // }

}
