import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common-component/footer/footer.component';
import { HeaderComponent } from './common-component/header/header.component';
import { LoginSignupComponent } from './common-component/login-signup/login-signup.component';
import { MaterialModule } from './shared/material/material.module';
import { BoostrapModule } from './shared/boostrap/boostrap.module';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';

import { ToastrModule } from 'ngx-toastr'; 
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaymentComponent } from './payment/payment.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { AddressComponent } from './my-account-pages/address/address.component';
import { OrdersComponent } from './my-account-pages/orders/orders.component';
import { ProfileComponent } from './my-account-pages/profile/profile.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactUsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginSignupComponent,
    CartComponent,
    WishlistComponent,
    PaymentComponent,
    TrackOrderComponent,
    ReturnPolicyComponent,
    AddressComponent,
    OrdersComponent,
    ProfileComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    BoostrapModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
