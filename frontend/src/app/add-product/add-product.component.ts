import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AddProductService } from '../services/add-product.service';

export interface Category {
  value: string;
  viewValue: string;
}

export interface ElecCategory {
  value: string;
  viewValue: string;
}

export interface BookGenre {
  value: string;
  viewValue: string;
}

export function requiredFileType(type: string) {
  return function (control: FormControl) {
    const file = control.value;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if (type.toLowerCase() !== extension.toLowerCase()) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}

export class Seller{
  sellerId: string;
  productPrice: number;
  productStock:number;
}

export class Product{
  productCategory: string;
  productSubcategory: string;
  productName: string;
  productDescription: string;
  sellers: Seller[];
}

export class Book{
  bookCategory: string;
  bookSubcategory: string;
  bookTitle: string;
  bookAuthor: string;
  bookISBN: string;
  bookPublisher: string;
  bookDescription: string;
  sellers: Seller;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isElectronic = true;
  eMail;
  product: Product={
    productCategory:'',
    productSubcategory:'',
    productName:'',
    productDescription:'',
    sellers:[{
      productStock:0,
      sellerId:'',
      productPrice:0
    }]
  };

  book: Book={
    bookISBN:'',
    bookAuthor:'',
    bookTitle:'',
    bookDescription:'',
    bookCategory:'',
    bookSubcategory:'',
    bookPublisher:'',
    sellers:{
      productStock:0,
      productPrice:0,
      sellerId:''
    }
  }
  constructor(private _formBuilder: FormBuilder, private host: ElementRef<HTMLInputElement>, private router:Router,
    private route:ActivatedRoute, private addProductService:AddProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=> {
      this.eMail = params.get('eMail');});
      console.log(this.eMail);
      

    this.firstFormGroup = this._formBuilder.group({
      category1: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      subcategory: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', requiredFileType('png')],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', requiredFileType('png')],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publisher:['', Validators.required]
    });

  }

  category: Category[] = [
    { value: 'electronics', viewValue: 'Electronics' },
    { value: 'books', viewValue: 'Books' }
  ];

  eleCat: ElecCategory[] = [
    { value: 'mobiles', viewValue: 'Mobiles' },
    { value: 'laptops', viewValue: 'Laptops' },
    { value: 'digi watch', viewValue: 'Digital Watches' },
    { value: 'computers', viewValue: 'Computers' },
    { value: 'comp access', viewValue: 'Computer Accessories' },
    { value: 'gaming', viewValue: 'Gaming' }
  ]

  genres: BookGenre[] = [
    { value: 'romantic', viewValue: 'Romantic' },
    { value: 'horror', viewValue: 'Horror' },
    { value: 'thriller', viewValue: 'Thriller' },
    { value: 'self-help', viewValue: 'Self-Help' },
    { value: 'comic', viewValue: 'Comics' },
    { value: 'sci-fi', viewValue: 'Sci-Fi' },
    { value: 'fantasy', viewValue: 'Fantasy' },
    { value: 'drama', viewValue: 'Drama' },
    { value: 'poetry', viewValue: 'Poetry' }
  ]
  getCat() {
    console.log(this.firstFormGroup.value.category1);
    if (this.firstFormGroup.value.category1 === 'books') {
      this.isElectronic = false;
    }
    else
      this.isElectronic = true;
  }

  takeInfoProduct() {
    this.product.productCategory=this.firstFormGroup.value.category1;
    this.product.productSubcategory=this.secondFormGroup.value.subcategory;
    this.product.productName=this.thirdFormGroup.value.name;
    this.product.productDescription=this.thirdFormGroup.value.description;
    this.product.sellers[0].productStock=this.thirdFormGroup.value.quantity;
    this.product.sellers[0].productPrice=this.thirdFormGroup.value.price;
    this.product.sellers[0].sellerId=this.eMail;
    console.log(this.product);
    this.addProductService.addProduct(this.product).subscribe();
    this.router.navigate(['./seller-dashboard-inventory',{eMail:this.eMail}]);
    }
  takeInfoBook(){
    this.book.bookCategory=this.firstFormGroup.value.category1;
    this.book.bookSubcategory=this.secondFormGroup.value.subcategory;
    this.book.bookAuthor=this.fourthFormGroup.value.author;
    this.book.bookTitle=this.fourthFormGroup.value.title;
    this.book.bookDescription=this.fourthFormGroup.value.description;
    this.book.bookISBN=this.fourthFormGroup.value.isbn;
    this.book.bookPublisher=this.fourthFormGroup.value.publisher;
    this.book.sellers.productPrice=this.fourthFormGroup.value.price;
    this.book.sellers.productStock=this.fourthFormGroup.value.quantity;
    this.book.sellers.sellerId=this.eMail;
    this.addProductService.addBook(this.book).subscribe();
    this.router.navigate(['./seller-dashboard-inventory',{eMail:this.eMail}]);
  }

  previewImage(event) {
    //  console.log(event);

    console.log("1111111111111", event);
  }
}
