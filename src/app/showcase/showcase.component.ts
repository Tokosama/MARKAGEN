import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseItemComponent } from '../showcase-item/showcase-item.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule,ShowcaseItemComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
  items = [
    { title: 'Nike', imagePath: 'assets/images/nike.png' },
    { title: 'Apple', imagePath: 'assets/images/apple.png' },
    { title: 'Coca-Cola', imagePath: 'assets/images/coca.png' },
    { title: 'Nike', imagePath: 'assets/images/nike.png' },
    { title: 'Apple', imagePath: 'assets/images/apple.png' },
    { title: 'Coca-Cola', imagePath: 'assets/images/coca.png' }
  ];
  visibleItems = 3;
  buttonState = "See More";

  loadMore() {
    if(this.buttonState == "See More")
    {
      this.visibleItems =this.items.length ;
      this.buttonState = "See Less"
    }else{
      this.visibleItems = 3;
      this.buttonState = "See More"
    }
  }
}
