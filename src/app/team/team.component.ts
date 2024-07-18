import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  members  = [
    { style: 'Nike', imagePath: 'assets/images/member1.png' },
    { style: 'Apple', imagePath: 'assets/images/member2.png' },
    { style: 'Coca-Cola', imagePath: 'assets/images/member3.png' },
    { style: 'Nike', imagePath: 'assets/images/member4.png' },
    { style: 'Apple', imagePath: 'assets/images/member5.png' },
    { style: 'Coca-Cola', imagePath: 'assets/images/member6.png' },
    { style: 'Nike', imagePath: 'assets/images/member4.png' },
    { style: 'Apple', imagePath: 'assets/images/member5.png' },
    { style: 'Coca-Cola', imagePath: 'assets/images/member6.png' },
    { style: 'Nike', imagePath: 'assets/images/member1.png' },
    { style: 'Apple', imagePath: 'assets/images/member2.png' },
    { style: 'Coca-Cola', imagePath: 'assets/images/member3.png' },
    { style: 'Nike', imagePath: 'assets/images/member4.png' },
    { style: 'Apple', imagePath: 'assets/images/member5.png' },
    { style: 'Coca-Cola', imagePath: 'assets/images/member6.png' },
    { style: 'Nike', imagePath: 'assets/images/member4.png' },
    { style: 'Apple', imagePath: 'assets/images/member5.png' }
  ];
  visibleItems = 6;
  buttonState = "See More";

  loadMore() {
    if(this.visibleItems <= this.members.length)
    {
      this.visibleItems += 3 ;
      this.buttonState = "See Less"
    }else {
      this.visibleItems = 6;
      this.buttonState = "See More"
    }
  }

}
