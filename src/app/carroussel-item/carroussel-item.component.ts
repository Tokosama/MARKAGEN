import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-carroussel-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carroussel-item.component.html',
  styleUrl: './carroussel-item.component.css'
})
export class CarrousselItemComponent {
  @Input() informations: { name: string, post: string, imagePath: string, description: string, }[] = [];
  @Input() name: string = '';
  @Input() post: string = '';
  @Input() imagePath: string = '';
  @Input() description: string = '';

  

}
