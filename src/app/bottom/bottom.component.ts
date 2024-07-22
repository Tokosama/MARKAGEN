import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  details  = [
    { option: 'Work with US' },
    { option: 'Private Coaching' },
    { option: 'About Us' },
    { option: 'Advertise With Us' },
    { option: 'Our Work' },
    { option: 'FAQs' },
    { option: 'Support Us' },
    { option: 'Our Commitment' },
    { option: 'Report a Bug' },
    { option: 'Business Advices' },
    { option: 'Our Team' },
   
   
  ];

}
