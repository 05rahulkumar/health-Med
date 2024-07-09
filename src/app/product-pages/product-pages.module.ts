import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPagesRoutingModule } from './product-pages-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductPagesRoutingModule
  ]
})
export class ProductPagesModule { }
