import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

  processus = [
    {
      title: 'Discovery',
      description: 'We meet with you to learn about your business, your goals, and your target audience.',
      icon: '/assets/icons/discover.png'
    },
    {
      title: 'Strategy',
      description: 'We develop a customized marketing strategy that is based on your unique needs and goals.', 
      icon: '/assets/icons/strategy.png'
    },
    {
      title: 'Execution',
      description: 'We execute our strategy using the latest digital marketing tools and techniques.', 
      icon: '/assets/icons/execution.png'
    },
    {
      title: 'Measurement',
      description: 'We track the results of our campaigns so that we can make adjustments as needed.',
    },
    
  ];

}
