import { Component } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {
  orderNumber: any;
  orderStatus: any[]=[];
  currentStep: any;

  onSubmit(): void {
    // Simulate fetching order status from a service
    this.orderStatus = [
      { label: 'Order Placed', date: new Date('2023-05-01T10:00:00') },
      { label: 'Order Processed', date: new Date('2023-05-02T12:00:00') },
      { label: 'Shipped', date: new Date('2023-05-03T15:00:00') },
      { label: 'Out for Delivery', date: new Date('2023-05-04T10:00:00') },
      { label: 'Delivered', date: new Date('2023-05-05T18:00:00') }
    ];
    this.currentStep = this.orderStatus.length; // assuming all steps are completed for demonstration
  }
}
