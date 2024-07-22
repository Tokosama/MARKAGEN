import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { Banner1Component } from "./banner1/banner1.component";
import { TeamComponent } from "./team/team.component";
import { CarrousselItemComponent } from './carroussel-item/carroussel-item.component';
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { BottomComponent } from "./bottom/bottom.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroComponent } from './intro/intro.component';
import { PartnersComponent } from "./partners/partners.component";
import { OurCommitmentsComponent } from './our-commitments/our-commitments.component';
import { LogoComponent } from './logo/logo.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { WorksComponent } from './works/works.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowcaseComponent, Banner1Component, TeamComponent, CarrousselItemComponent, TestimonialsComponent, BottomComponent,
     FooterComponent, NavbarComponent, IntroComponent, PartnersComponent,OurCommitmentsComponent ,
      LogoComponent, HelpMeComponent, WorksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'markAgen';
}
