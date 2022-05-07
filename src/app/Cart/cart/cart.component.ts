import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartAPIServiceService } from 'src/app/Services/Cart/cart-apiservice.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,AfterViewInit {
products:any=[];
AllProducts:any=0;

quantity:number=1;

  constructor(private CatrAPIService:CartAPIServiceService,
  private productcart:ProductCartService) {

  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
 this.productcart.sharedValue.subscribe(data=>{
   this.quantity=data

 })

    this.CatrAPIService.GEtProductData().subscribe(res=>{
      this.products=res;
      this.AllProducts=this.CatrAPIService.GetTotalAmount();
    });
  }

  RemoveProduct(item:any){
    this.CatrAPIService.RemoveCartData(item);

  }
  RemoveAllProducts(){
    this.CatrAPIService.RemoveAllCart();
  }

}
