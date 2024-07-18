import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { Banner1Component } from "./banner1/banner1.component";
import { TeamComponent } from "./team/team.component";
import { CarrousselItemComponent } from './carroussel-item/carroussel-item.component';
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowcaseComponent, Banner1Component, TeamComponent, CarrousselItemComponent, TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'markAgen';
}
