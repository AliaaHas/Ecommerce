import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartAPIServiceService } from 'src/app/Services/Cart/cart-apiservice.service';
import { ProductCartService } from 'src/app/Services/product-cart.service';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { ShoppingCartItems } from 'src/app/ViewModel/ShoppingCartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
products:IProduct[]=[];
AllProducts:any=0;

quantity:number=1;

cartItem:ShoppingCartItems | undefined=undefined;
cartlist:ShoppingCartItems[]=[];

  constructor(private CatrAPIService:CartAPIServiceService,
  private productcart:ProductCartService) {

  }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {

   this.productcart.productValues.subscribe(data=>{
    this.products.push(data)
   })
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
