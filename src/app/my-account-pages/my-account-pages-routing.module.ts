import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { MyAccountPagesComponent } from './my-account-pages.component';

const routes: Routes = [
  // { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {path:'account',component:MyAccountPagesComponent, children:[
    {path:'profile',component:ProfileComponent},
    {path:'orders',component:OrdersComponent},
    {path:'address',component:AddressComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountPagesRoutingModule { }
