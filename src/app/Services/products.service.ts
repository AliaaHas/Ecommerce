import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModel/iproduct';
import { ICategory } from '../ViewModel/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private ProductList:IProduct[];
  constructor() {

    this.ProductList=[
      {Id:1,Name:'Hp',Price:200,Quantity:0,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
      {Id:2,Name:'Dell',Price:500,Quantity:1,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
      {Id:3,Name:'TabletSumsung',Price:800,Quantity:15,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
      {Id:4,Name:'TabletLenovo',Price:700,Quantity:25,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
      {Id:5,Name:'TabletHwawy',Price:800,Quantity:0,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
      {Id:6,Name:'Lenovo',Price:700,Quantity:30,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
      {Id:7,Name:'TabletMac',Price:800,Quantity:1,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
      {Id:8,Name:'ViVo',Price:800,Quantity:5,Img:'https://fakeimg.pl/250x100/',CateogryID:3},
      {Id:9,Name:'IPhone',Price:700,Quantity:10,Img:'https://fakeimg.pl/250x100/',CateogryID:3},

    ];
  }
  getAllProducts():IProduct[]{
    return this.ProductList;
    // console.log(this.ProductList);

  }
  
    	getProductsByCatID(CateogryID:number):IProduct[] {
        if(CateogryID==0){
        return   this.ProductList;
        }
        else
      return  this.ProductList.filter(prd=>prd.CateogryID == CateogryID)

    }



    	getProductByID(prodID:number): IProduct|undefined{
        return this.ProductList.find(prd=>prd.Id==prodID);

      }

      getProductIDSList():number[]{
        return this.ProductList.map(P=>P.Id);

      }

}
