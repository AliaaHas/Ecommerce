import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { AddProductComponent } from './AddProduct/add-product/add-product.component';
import { ContactUSComponent } from './ContactUs/contact-us/contact-us.component';
import { HomeComponent } from './Home/home/home.component';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { MainLayOutComponent } from './main-lay-out/main-lay-out.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './Regsteration/register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:MainLayOutComponent,children:[
     //DefaulPath
    {path:'',redirectTo:'/Home',pathMatch:'full'},

    {path:'Home',component:HomeComponent},
    {path:'AboutUs', component:AboutUsComponent},
    {path:'Contactus',component:ContactUSComponent},
    {path:'Products', component:ShoppingCartComponent},
    {path:'Products/:ID',component:ProductDetailsComponent},
    {path:'AddProduct',component:AddProductComponent},


  ]},

   //WildCard path
   {path:'LogIn',component:LogInComponent},
   {path:'Register',component:RegisterComponent},

   {path:'**',component:NotFoundComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
