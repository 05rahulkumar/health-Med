import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginSignupComponent } from './common-component/login-signup/login-signup.component';
import { RoleGuardGuard } from './guards/role-guard.guard';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'about-us', component:AboutusComponent},
   {path:'contact-us', component:ContactUsComponent},
   {path:'login-Signup', component:LoginSignupComponent},
   {path:'product',loadChildren:()=>import('./product-pages/product-pages.module').then(m=>m.ProductPagesModule)},
  
 {path:'admin',loadChildren:()=>import('./admin/admin.module').then((mod)=>mod.AdminModule), canLoad:[RoleGuardGuard],data:{role:'Admin'}},
   {path:'',loadChildren:()=>import('./my-account-pages/my-account-pages.module').then(m=>m.MyAccountPagesModule)},
   {path:'return-policy', component:ReturnPolicyComponent,canActivate:[RoleGuardGuard],data:{role:'Admin'}},
   {path:'track-order', component:TrackOrderComponent},
   {path:'cart', component:CartComponent},
   {path:'wishlist', component:WishlistComponent},
   {path:'order-summary',component:OrderSummaryComponent},
   {path:'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
