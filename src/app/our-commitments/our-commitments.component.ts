import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-commitments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-commitments.component.html',
  styleUrl: './our-commitments.component.css'
})
export class OurCommitmentsComponent  {
  
  commitments = [
    {
      title: '245%',
      description: 'More revenues for the brand', top: 137, left: 121,
      icon: '/Container1.jpg'
    },
    {
      title: '130K+',
      description: 'Audiences reached', top: 138, left: 425,
      icon: '/Container2.jpg'
    },
    {
      title: '50+',
      description: 'Brands trust us', top: 289, left: 121,
      icon: '/Container3.jpg'
    },
    {
      title: '24+',
      description: 'Worldwide awards', top: 289, left: 425,
      icon: '/Container4.jpg'
    },
    
  ];



}