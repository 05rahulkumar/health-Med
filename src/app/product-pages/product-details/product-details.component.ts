import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  relatedProducts = [
    { name: 'Related Product 1', price: 29.99 },
    { name: 'Related Product 2', price: 39.99 },
    { name: 'Related Product 3', price: 49.99 }
  ];

  similarProducts = [
    { name: 'Similar Product 1', price: 59.99 },
    { name: 'Similar Product 2', price: 69.99 },
    { name: 'Similar Product 3', price: 79.99 }
  ];
  constructor() { }
  ngOnInit(): void {
  }

  addToCart(): void {
    // Swal.fire('Added to cart!', 'The product has been added to your cart.', 'success');
  }

  addToWishlist(): void {
    // Swal.fire('Added to wishlist!', 'The product has been added to your wishlist.', 'success');
  }

}

