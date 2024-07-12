import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {Router} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  isSmallScreen: boolean = false; // Default value

  constructor(private breakpointObserver: BreakpointObserver,private authService:AuthService,private Router:Router) {}
  isAdmin!:boolean;
  ngOnInit(): void {
    // Check for small screen breakpoints
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
    
if(this.authService.getToken()){
    this.authService.getProfile().subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.authService.setUser(res.user);
        res.user?.userType=='Admin'?this.isAdmin=false:this.isAdmin=true;
        if(res.user.userType=='Admin'){
          this.Router.navigate(['/admin'])
        }
      }
    })
  }
  }

  productItems = [
    { name: 'Product 1', link: '/product1' },
    { name: 'Product 2', link: '/product2' },
    // Add more product items
  ];

  orderItems = [
    { name: 'Order 1', link: '/order1' },
    { name: 'Order 2', link: '/order2' },
    // Add more order items
  ];
}
