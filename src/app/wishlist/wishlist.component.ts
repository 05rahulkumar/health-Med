import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist: any[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/product1.jpg',
      price: 50,
      discount: 0.1
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'assets/product2.jpg',
      price: 80,
      discount: 0.15
    }
    // Add more wishlist items as needed
  ];

  removeFromWishlist(item: any): void {
    // Implement logic to remove item from wishlist
    console.log('Removed item from wishlist:', item);
  }
}
