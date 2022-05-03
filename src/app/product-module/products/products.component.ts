import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../../ViewModel/iproduct';
import { Store} from '../../ViewModel/store';
import {ICategory} from '../../ViewModel/icategory';
import { isNgTemplate } from '@angular/compiler';
import { ShoppingCartItems } from '../../ViewModel/ShoppingCartItems';
import { ProductsService } from '../../Services/products.service';
import { ProductAPIService } from '../../Services/ProductAPI/product-api.service';
import { CartAPIServiceService } from 'src/app/Services/Cart/cart-apiservice.service';
// import { log } from 'console';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges,AfterViewInit {


  store:Store;
  // ProductList:IProduct[];

   selectedCatID:number=1;
   categroy:ICategory[]=[];
   FilteredProd:IProduct[]=[];
    credit_Card:number=0;




   ClientName:string="";
   IsPurshased:boolean=true;
   idNumber:string="";
  selectdate:Date=new Date();


  @Input()RecivedSelectedCategoryId:number=0;
  OrderTotalPrice:number=0;

  ProductListOfCategory:IProduct[]=[];


  @Output() OnBuyDone: EventEmitter<ShoppingCartItems>;


  Cart:ShoppingCartItems[]=[];

  Productlist:any;
  constructor(
    public Prdservice:ProductsService,
    private prdApiservice:ProductAPIService,
    private CartAPIService:CartAPIServiceService,
    private toast :NgToastService) {


  this.OnBuyDone= new EventEmitter<ShoppingCartItems>();

    this.store={
  	Name:"ElectricalStore",
    Branches:["Assuit,Alx,Minia,sohage"],
    Logo:'https://fakeimg.pl/250x100/',

    };


    this.categroy=[
      {Id:1,Name:"Category1"},
      {Id:2,Name:"Category2"},

    ];
  }
  ngAfterViewInit(): void {

  }


  // checkout(){
  //   for (let item of this.ProductsCompObj.ProductList) {
  //     var prd=this.Cart.find(p=>p.ProductId==item.Id)
  //     if(prd){
  //       item.Quantity-=prd.SelectedQuantity;
  //     }
  //   }
  //   this.Cart=[];
  // }


  ngOnChanges(changes: SimpleChanges): void {

    this.prdApiservice.getProductsByCatID(this.RecivedSelectedCategoryId)
    .subscribe(Prdlist=>{this.ProductListOfCategory=Prdlist;
   // console.log(this.ProductListOfCategory);
    //console.log(this.RecivedSelectedCategoryId);
    });

    // this.ProductListOfCategory=this.Prdservice.getProductsByCatID(this.RecivedSelectedCategoryId);
    // console.log(this.RecivedSelectedCategoryId);

  //   if(this.RecivedSelectedCategoryId==0){
  //     this.ProductListOfCategory=this.ProductList;
  //   }
  //   else
  //  this.ProductListOfCategory=
  //   this.ProductList.filter(prd=>prd.CateogryID == this.RecivedSelectedCategoryId)


  }

  ngOnInit(): void {

    this.prdApiservice.getAllProducts().subscribe(Prdlist=>{
      this.ProductListOfCategory=Prdlist;
     // console.log(Prdlist);
    });

    this.Productlist.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.Price})
    });
    // this.ProductListOfCategory=this.Prdservice.getProductsByCatID(this.RecivedSelectedCategoryId);

  }

  ToggleTable(){
    this.IsPurshased=!this.IsPurshased;
  }

  DecreaseQuqntity(x:IProduct){
   x.Quantity=x.Quantity-1;

  }
  fu(){
    console.log(this.selectedCatID);
  }

  CalPrice(itemcount:number,Price:number){
    this.OrderTotalPrice+=(itemcount*Price)

  }


  Buy(item:IProduct,Quantity:number){
    this.Cart[item.Id]={
      ProductId:item.Id,
      ProductName:item.Name,
      SelectedQuantity:Quantity,
      UnitPrice:item.Price

    }
    this.OnBuyDone.emit(this.Cart[item.Id])
  }
AddToCart(item:any,quantity:any){

this.CartAPIService.AddTOCart(item)
}

Toast(item:any){
  this.toast.info({detail:"Hello It's Me " ,summary: item.Name,duration:5000})
}

}


