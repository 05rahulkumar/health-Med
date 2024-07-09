import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      image: 'path_to_image1',
      title: 'Product 1',
      originalPrice: 100,
      discountedPrice: 80
    },
    {
      image: 'path_to_image2',
      title: 'Product 2',
      originalPrice: 200,
      discountedPrice: 150
    },
    // Add more products here
  ];

  filteredProducts = this.products;
  priceRange = 1000;
  sortOption = 'default';

  constructor() {}

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => product.discountedPrice <= this.priceRange);
    this.sortProducts();
  }

  sortProducts(): void {
    if (this.sortOption === 'priceAsc') {
      this.filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (this.sortOption === 'priceDesc') {
      this.filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }
  }
}


