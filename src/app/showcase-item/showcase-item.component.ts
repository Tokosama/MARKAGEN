import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-showcase-item',
  standalone: true,
  imports: [],
  templateUrl: './showcase-item.component.html',
  styleUrl: './showcase-item.component.css'
})
export class ShowcaseItemComponent {
  @Input() title: string = '';
  @Input() imagePath: string = '';
}
