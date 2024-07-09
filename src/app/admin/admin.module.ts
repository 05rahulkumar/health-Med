import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { MaterialModule } from '../shared/material/material.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AddProductComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
