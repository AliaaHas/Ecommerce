import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './AddProduct/add-product/add-product.component';
 import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const routes: Routes = [

    {path:'Products', component:ShoppingCartComponent},
    {path:'Products/:ID',component:ProductDetailsComponent},
    {path:'AddProduct',component:AddProductComponent},

    ]


@NgModule({
  declarations: [
    AddProductComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ShoppingCartComponent,

  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
