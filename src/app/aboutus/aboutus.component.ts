import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  teamMembers = [
    { name: 'Dr. John Doe', role: 'Chief Medical Officer' },
    { name: 'Jane Smith', role: 'Head of Nursing' },
    { name: 'Emily Johnson', role: 'Healthcare Administrator' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

