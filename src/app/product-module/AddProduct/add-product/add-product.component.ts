import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { ProductAPIService } from 'src/app/Services/ProductAPI/product-api.service';
import { ICategory } from 'src/app/ViewModel/icategory';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
// interface Al {

//   id:number;
//   name:string;
//   brand:string;
// }

export class AddProductComponent implements OnInit {



  newPrd: IProduct={} as IProduct;

  CategoryList:ICategory[]=[];

  constructor( private prdApiserver:ProductAPIService,
    private route:Router,
    private categoryservice:CategoryService) {


      this.categoryservice.getAllCateogories().subscribe(catlist=>{
        this.CategoryList=catlist;
        console.log(catlist);

      });




     }

  ngOnInit(): void {


  }


  Saveproduct(){
    this.prdApiserver.addNewProduct(this.newPrd).subscribe(prd=>{
      this.route.navigate(['/Products']);
    });

  }

}
