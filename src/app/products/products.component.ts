import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../ViewModel/iproduct';
import { Store} from '../ViewModel/store';
import {ICategory} from '../ViewModel/icategory';
import { isNgTemplate } from '@angular/compiler';
import { ShoppingCartItems } from '../ViewModel/ShoppingCartItems';
import { ProductsService } from '../Services/products.service';
import { ProductAPIService } from '../Services/ProductAPI/product-api.service';
// import { log } from 'console';

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
  constructor(
    public Prdservice:ProductsService,
    private prdApiservice:ProductAPIService) {


  this.OnBuyDone= new EventEmitter<ShoppingCartItems>();

    this.store={
  	Name:"ElectricalStore",
    Branches:["Assuit,Alx,Minia,sohage"],
    Logo:'https://fakeimg.pl/250x100/',

    };
    // this.ProductList=[
    //   {Id:1,Name:'Hp',Price:200,Quantity:0,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
    //   {Id:2,Name:'Dell',Price:500,Quantity:1,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
    //   {Id:3,Name:'TabletSumsung',Price:800,Quantity:15,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
    //   {Id:4,Name:'TabletLenovo',Price:700,Quantity:25,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
    //   {Id:5,Name:'TabletHwawy',Price:800,Quantity:0,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
    //   {Id:6,Name:'Lenovo',Price:700,Quantity:30,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
    //   {Id:7,Name:'TabletMac',Price:800,Quantity:1,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
    //   {Id:8,Name:'ViVo',Price:800,Quantity:5,Img:'https://fakeimg.pl/250x100/',CateogryID:3},
    //   {Id:9,Name:'IPhone',Price:700,Quantity:10,Img:'https://fakeimg.pl/250x100/',CateogryID:3},

    // ];

    this.categroy=[
      {Id:1,Name:"Category1"},
      {Id:2,Name:"Category2"},

      // {Id:1,Name:"Category3"},
      // {Id:2,Name:"Category4"}


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
    console.log(this.ProductListOfCategory);
    console.log(this.RecivedSelectedCategoryId);
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
      console.log(Prdlist);
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




}


