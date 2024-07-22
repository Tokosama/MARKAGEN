import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

  partners = [
    { name: 'sportify', logo: 'assets/images/sportify.jpg', link: 'https://partner1.com' },
    { name: 'google', logo: 'assets/images/google.jpg', link: 'https://partner2.com' },
    { name: 'uber', logo: 'assets/images/uber.jpg', link: 'https://partner3.com' },
    { name: 'microsoft', logo: 'assets/images/microsoft.jpg', link: 'https://partner1.com' },
    { name: 'shopify', logo: 'assets/images/shopify.jpg', link: 'https://partner1.com' },
    { name: 'evernote', logo: 'assets/images/evernote.jpg', link: 'https://partner1.com' },
    { name: 'Adobe', logo: 'assets/images/Adobe.jpg', link: 'https://partner1.com' },
    { name: 'Paypal', logo: 'assets/images/paypal.jpg', link: 'https://partner1.com' },
    { name: 'Amazone', logo: 'assets/images/Amazone.jpg', link: 'https://partner1.com' },
    { name: 'Asana', logo: 'assets/images/Asana.jpg', link: 'https://partner1.com' },
  ];
  limitedPartners = this.partners.slice(0, 5);
  limitedPartners2 = this.partners.slice(5, 10);

}