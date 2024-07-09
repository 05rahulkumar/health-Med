import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // {path:'',component:AdminComponent},
  // {path:'add-product',component:AddProductComponent}
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: AdminComponent }, // Dashboard component or similar
      { path: 'add-product', component: AddProductComponent },
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
