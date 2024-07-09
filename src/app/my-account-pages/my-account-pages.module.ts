import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountPagesRoutingModule } from './my-account-pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { MyAccountPagesComponent } from './my-account-pages.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    AddressComponent,
    MyAccountPagesComponent
  ],
  imports: [
    CommonModule,
    MyAccountPagesRoutingModule,
    
  ]
})
export class MyAccountPagesModule { }
