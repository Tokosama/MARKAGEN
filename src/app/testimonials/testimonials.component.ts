import { Component } from '@angular/core';
import { CarrousselItemComponent } from '../carroussel-item/carroussel-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,CarrousselItemComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  informations = [
    { name: 'Amelia Joseph', post:'Chief Manager', imagePath: 'assets/images/test1.png' , description:' My vision came alive effortlessly Their blend of casual and professional approach made the process a breeze Creativity flowed, and the results were beyond my expectations ', },
    { name: 'Jacob Joshua', post:'Chief Manager', imagePath: 'assets/images/test2.png' , description:'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, its got to be Embrace!', },
    { name: 'Jacob Jack', post:'Chief Manager', imagePath: 'assets/images/test3.png' , description:' Embrace really nails it! Creative brilliance, approachable style. Theyre the partners you want—artistry meets strategy. Thrilled with what they achieved!"', },
    { name: 'Amelia Joseph', post:'Chief Manager', imagePath: 'assets/images/test1.png' , description:' My vision came alive effortlessly Their blend of casual and professional approach made the process a breeze Creativity flowed, and the results were beyond my expectations ', },
    { name: 'Jacob Joshua', post:'Chief Manager', imagePath: 'assets/images/test2.png' , description:'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, its got to be Embrace!', },
    { name: 'Jacob Jack', post:'Chief Manager', imagePath: 'assets/images/test3.png' , description:' Embrace really nails it! Creative brilliance, approachable style. Theyre the partners you want—artistry meets strategy. Thrilled with what they achieved!"', },

  ];
  isHighlighted: boolean = true ;
  
  currentIndex: number = 0;
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.informations.length - 1) {
      this.currentIndex++;
    }
  }

  getDynamicStyles(index: number) {
    const isVisible = Math.abs(this.currentIndex - index) < 3;
    return {
      'background-color': index === this.currentIndex ? 'lightblue' : '',
      'opacity': isVisible ? 1 : 0,
      'transition': 'transform 0.5s ease, opacity 0.5s ease'
    };
  }

  getCarouselStyles() {
    const colClass = 'col-4'; 
    const colWidth = this.getBootstrapColWidth(colClass);
    const offset = -this.currentIndex * colWidth;
    return {
      'transform': `translateX(${offset}%)`,
      'transition': 'transform 0.5s ease'
    };
  }

  getBootstrapColWidth(colClass: string): number {
    const colNumber = parseInt(colClass.split('-')[1], 10);
    return (colNumber / 12) * 100;
  }

}

