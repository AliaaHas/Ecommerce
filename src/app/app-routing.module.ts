import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './AddProduct/add-product/add-product.component';
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
    {path:'Products', component:ShoppingCartComponent},
    {path:'Products/:ID',component:ProductDetailsComponent},
    {path:'AddProduct',component:AddProductComponent},
    
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },

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
