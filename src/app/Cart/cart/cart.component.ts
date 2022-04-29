import { Component, OnInit } from '@angular/core';
import { CartAPIServiceService } from 'src/app/Services/Cart/cart-apiservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
products:any=[];
AllProducts:any=0;
  constructor(private CatrAPIService:CartAPIServiceService) {

  }

  ngOnInit(): void {
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
