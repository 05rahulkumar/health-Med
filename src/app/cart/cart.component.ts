import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/product1.jpg',
      price: 50,
      discount: 0.1,
      quantity: 1
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'assets/product2.jpg',
      price: 80,
      discount: 0.15,
      quantity: 2
    }
    // Add more items as needed
  ];

  updateCartItem(item: any): void {
    // Handle logic to update cart item quantity
    console.log('Updated quantity for item:', item);
  }

  removeCartItem(item: any): void {
    // Handle logic to remove cart item
    console.log('Removed item:', item);
  }

  checkout(): void {
    // Handle checkout logic
    console.log('Checkout clicked');
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalDiscount(): number {
    return this.cartItems.reduce((total, item) => total + ((item.price * item.discount) * item.quantity), 0);
  }
}
