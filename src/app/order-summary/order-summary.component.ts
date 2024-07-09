import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  addressFormGroup!: FormGroup;
  orderSummaryFormGroup!: FormGroup;
  selectedAddress = '123 Main Street, City, Country';
  cartItems: any[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/img/meeting.svg',
      price: 50,
      discount: 0.1,
      quantity: 1
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'assets/img/meeting.svg',
      price: 80,
      discount: 0.15,
      quantity: 1
    }
    // Add more cart items as needed
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addressFormGroup = this._formBuilder.group({
      address: ['', Validators.required]
    });
    this.orderSummaryFormGroup = this._formBuilder.group({});
  }

  changeAddress(): void {
    console.log('Change address clicked');
    // Implement address change logic here
  }

  removeCartItem(item: any): void {
    console.log('Removed item from cart:', item);
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  updateCartItem(item: any): void {
    console.log('Updated item quantity:', item);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalDiscount(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.discount * item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTax(): number {
    return this.getTotalPrice() * 0.1; // Assuming a 10% tax rate
  }

  getGrandTotal(): number {
    return this.getTotalPrice() - this.getTotalDiscount() + this.getTax();
  }

  placeOrder(): void {
    console.log('Order placed');
    // Implement your place order logic here
  }
}