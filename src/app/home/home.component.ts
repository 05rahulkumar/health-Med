import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { src: 'https://assets-global.website-files.com/61eef5a30e49f6da8338f012/625874cd2876853a5bb7e997_1338268_HCTN%20-%20Website%20Blog%20Graphic_1_575x250_041122.jpg', alt: 'Image 1' },
    { src: 'https://as2.ftcdn.net/v2/jpg/05/77/84/27/1000_F_577842756_DWiS65lNLDG5DPaozrJk3c9TgkGGBwCb.jpg', alt: 'Image 2' },
    { src: 'https://cruzotec.com/wp-content/uploads/2021/05/Component-6-%E2%80%93-2.png', alt: 'Image 3' }
  ];

  constructor(config: NgbCarouselConfig) {
    // Customize default NgbCarouselConfig values if needed
    config.interval = 5000; // Set auto-rotation interval in milliseconds (default is 5000)
    config.wrap = true; // Set whether carousel should loop (default is true)
    config.keyboard = true; // Set whether keyboard navigation is enabled (default is true)
    config.pauseOnHover = true; // Set whether auto-rotation should pause on mouse hover (default is true)
  }

  categories = [
    { name: 'Health Food and Drinks', image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7af974da68693a0996f5b1c3e8ceaeaf.png?f=png?dim=256x0' },
    { name: 'Skin Care', image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=256x0' },
    { name: 'Mother and Baby Care', image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0de65bec9fc2342b978b739fa78a6095.png?f=png?dim=256x0' },
    { name: 'Home Care', image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0' },
    { name: 'Summer Store', image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e9ceb38252cd333f910b383ee75004c0.png?f=png?dim=256x0' }
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dotsEach: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1.4
      },
      600: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  products = [
    { title: 'MuscleBlaze Creatine Monohydrate', originalPrice: 300, discountedPrice: 240, image: 'https://img4.hkrtcdn.com/28161/prd_2816093-MuscleBlaze-PRE-Workout-200-Xtreme-0.22-lb-Fruit-Punch_c_m.jpg', rating: 2.5 },
    { title: 'Protinex Nutritional Drink ', originalPrice: 100, discountedPrice: 80, image: 'https://cdn01.pharmeasy.in/dam/products_otc/373983/protinex-nutritional-drink-mix-for-adults-for-everyday-health-with-high-protein-rich-chocolate-400g-2-1685706536.jpg?dim=1440x0', rating: 4.5 },
   { title: 'Protinex Original Adult Health', originalPrice: 200, discountedPrice: 160, image: 'https://cdn01.pharmeasy.in/dam/products_otc/383035/protinex-original-adult-health-nutritional-drink-mix-for-recovery-with-high-protein-250-g-2-1685706499.jpg?dim=700x0&dpr=1&q=100', rating: 5 },
    { title: 'Liveasy Wellness Calcium Magnesium ', originalPrice: 250, discountedPrice: 200, image: 'https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=700x0&dpr=1&q=100', rating: 4 },
    { title: 'MuscleBlaze Creatine Monohydrate', originalPrice: 300, discountedPrice: 240, image: 'https://img4.hkrtcdn.com/28161/prd_2816093-MuscleBlaze-PRE-Workout-200-Xtreme-0.22-lb-Fruit-Punch_c_m.jpg', rating: 2.5 },
  
  ];

  getStarClass(rating: number, star: number): string {
    if (rating >= star) {
      return 'fa-star';
    } else if (rating >= star - 0.5) {
      return 'fa-star-half-alt';
    } else {
      return 'fa-star-o';
    }
  }

  testimonials = [
    { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'John Doe' },
    { quote: 'Nulla facilisi. Mauris efficitur felis in nunc elementum ultrices.', author: 'Jane Smith' },
    { quote: 'Vestibulum cursus tortor at mi efficitur, eu gravida metus viverra.', author: 'David Johnson' }
  ];

  afterChange(e: any) {
    // console.log('afterChange', e);
  }

  labTests = [
    {
      name: 'Diabetes Test',
      image: 'assets/img/diabetes-test.jpg',
      description: 'Comprehensive diabetes checkup'
    },
    {
      name: 'Heart Health',
      image: 'assets/img/heart-health.jpg',
      description: 'Complete heart health assessment'
    },
    {
      name: 'Liver Function',
      image: 'assets/img/liver-function.jpg',
      description: 'Detailed liver function tests'
    },
    {
      name: 'Kidney Health',
      image: 'assets/img/kidney-health.jpg',
      description: 'Kidney function and health tests'
    }
    // Add more lab tests as needed
  ];


}
