import { HttpClient, HttpEventType } from '@angular/common/http';
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


export class AddProductComponent implements OnInit {



  newPrd: IProduct={} as IProduct;

  CategoryList:ICategory[]=[];

   response:{ dbpath: ''; } | undefined;

   message:string="";
   progress:number=0;

  constructor( private prdApiserver:ProductAPIService,
    private route:Router,
    private categoryservice:CategoryService,
    private http:HttpClient
    ) {


      this.categoryservice.getAllCateogories().subscribe(catlist=>{
        this.CategoryList=catlist;
        console.log(catlist);

      });




     }

  ngOnInit(): void {


  }


  Saveproduct(){
    this.newPrd.image=this.newPrd.image.split('\\')[2]
    this.prdApiserver.addNewProduct(this.newPrd).subscribe(prd=>{
      this.route.navigate(['/Products']);
      this.response?.dbpath


    });

  }



  public uploadfile=(files:any) =>{
    if(files.files.length===0)
    return;
let filetoupload=<File>files.files[0]
const formdata= new FormData();
formdata.append('file',filetoupload,filetoupload.name)
this.http.post('https://localhost:44386/api/uploads',formdata,{reportProgress:true,observe:'events'}).
subscribe(event=>{
  if(event.type=== HttpEventType.UploadProgress){
  // this.progress=Math.round(100 * event.loaded /event.total );
  }
  else if(event.type===HttpEventType.Response){
    this.message='uploadSuccess';
   // this.onuploadfinished.emit(event.body);
   console.log (JSON.stringify(event.body).split('\\')[2]);
  // console.log (JSON.stringify(event.body));

  }
})
  }

  public uploadfinished=(event:any) =>{
    this.response=event;

  }
  }


